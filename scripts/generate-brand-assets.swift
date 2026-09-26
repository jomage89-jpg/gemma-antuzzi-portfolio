import AppKit
import Foundation

let fileManager = FileManager.default
let projectRoot = URL(fileURLWithPath: fileManager.currentDirectoryPath)
let starsURL = projectRoot.appendingPathComponent("public/doodles/stars.png")
let faviconURL = projectRoot.appendingPathComponent("public/favicon.png")
let socialCardURL = projectRoot.appendingPathComponent("public/og.png")

let paper = NSColor(calibratedRed: 17 / 255, green: 17 / 255, blue: 15 / 255, alpha: 1)
let ink = NSColor(calibratedRed: 244 / 255, green: 242 / 255, blue: 235 / 255, alpha: 1)
let green = NSColor(calibratedRed: 184 / 255, green: 243 / 255, blue: 74 / 255, alpha: 1)
let muted = NSColor(calibratedRed: 157 / 255, green: 154 / 255, blue: 145 / 255, alpha: 1)

func bitmap(from url: URL) throws -> NSBitmapImageRep {
  guard
    let image = NSImage(contentsOf: url),
    let tiff = image.tiffRepresentation,
    let bitmap = NSBitmapImageRep(data: tiff)
  else {
    throw NSError(domain: "BrandAssets", code: 1, userInfo: [NSLocalizedDescriptionKey: "Impossibile leggere \(url.path)"])
  }
  return bitmap
}

func pngData(from bitmap: NSBitmapImageRep) throws -> Data {
  guard let data = bitmap.representation(using: .png, properties: [:]) else {
    throw NSError(domain: "BrandAssets", code: 2, userInfo: [NSLocalizedDescriptionKey: "Impossibile creare il PNG"])
  }
  return data
}

func makeBitmap(width: Int, height: Int) throws -> NSBitmapImageRep {
  guard let bitmap = NSBitmapImageRep(
    bitmapDataPlanes: nil,
    pixelsWide: width,
    pixelsHigh: height,
    bitsPerSample: 8,
    samplesPerPixel: 4,
    hasAlpha: true,
    isPlanar: false,
    colorSpaceName: .deviceRGB,
    bytesPerRow: 0,
    bitsPerPixel: 0
  ) else {
    throw NSError(domain: "BrandAssets", code: 3, userInfo: [NSLocalizedDescriptionKey: "Impossibile creare la superficie grafica"])
  }
  return bitmap
}

func starBounds(in source: NSBitmapImageRep) -> NSRect {
  var minX = source.pixelsWide
  var minY = source.pixelsHigh
  var maxX = 0
  var maxY = 0

  for y in 0..<source.pixelsHigh {
    for x in 0..<source.pixelsWide {
      guard let color = source.colorAt(x: x, y: y)?.usingColorSpace(.deviceRGB) else { continue }
      let isDoodle = color.greenComponent > 0.34 && color.greenComponent > color.redComponent * 1.35
      if isDoodle {
        minX = min(minX, x)
        minY = min(minY, y)
        maxX = max(maxX, x)
        maxY = max(maxY, y)
      }
    }
  }

  return NSRect(x: minX, y: minY, width: maxX - minX + 1, height: maxY - minY + 1)
}

func makeFavicon(from source: NSBitmapImageRep) throws -> NSBitmapImageRep {
  let size = 512
  let output = try makeBitmap(width: size, height: size)
  let bounds = starBounds(in: source)
  let sourceRect = NSRect(
    x: bounds.minX,
    y: CGFloat(source.pixelsHigh) - bounds.maxY,
    width: bounds.width,
    height: bounds.height
  )
  let padding = 52.0
  let scale = min((Double(size) - padding * 2) / bounds.width, (Double(size) - padding * 2) / bounds.height)
  let drawWidth = bounds.width * scale
  let drawHeight = bounds.height * scale
  let drawX = (Double(size) - drawWidth) / 2
  let drawY = (Double(size) - drawHeight) / 2

  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: output)
  paper.setFill()
  NSRect(x: 0, y: 0, width: size, height: size).fill()

  guard let sourceImage = NSImage(data: try pngData(from: source)) else {
    throw NSError(domain: "BrandAssets", code: 4, userInfo: [NSLocalizedDescriptionKey: "Impossibile preparare il doodle"])
  }
  sourceImage.size = NSSize(width: source.pixelsWide, height: source.pixelsHigh)
  sourceImage.draw(
    in: NSRect(x: drawX, y: drawY, width: drawWidth, height: drawHeight),
    from: sourceRect,
    operation: .sourceOver,
    fraction: 1,
    respectFlipped: false,
    hints: [.interpolation: NSImageInterpolation.high]
  )
  NSGraphicsContext.restoreGraphicsState()

  // Uniforma il verde del disegno alla palette del portfolio, preservando l’antialiasing.
  for y in 0..<size {
    for x in 0..<size {
      guard let color = output.colorAt(x: x, y: y)?.usingColorSpace(.deviceRGB) else { continue }
      let coverage = max(0, min(1, (color.greenComponent - color.redComponent) * 1.7))
      if coverage > 0.01 {
        let blended = NSColor(
          calibratedRed: paper.redComponent * (1 - coverage) + green.redComponent * coverage,
          green: paper.greenComponent * (1 - coverage) + green.greenComponent * coverage,
          blue: paper.blueComponent * (1 - coverage) + green.blueComponent * coverage,
          alpha: 1
        )
        output.setColor(blended, atX: x, y: y)
      }
    }
  }

  return output
}

func fittedFont(name: String, maxSize: CGFloat, text: String, maxWidth: CGFloat, kernRatio: CGFloat) -> (NSFont, CGFloat) {
  var size = maxSize
  while size > 48 {
    let font = NSFont(name: name, size: size) ?? NSFont.systemFont(ofSize: size)
    let kern = size * kernRatio
    let width = (text as NSString).size(withAttributes: [.font: font, .kern: kern]).width
    if width <= maxWidth { return (font, kern) }
    size -= 2
  }
  let font = NSFont(name: name, size: size) ?? NSFont.systemFont(ofSize: size)
  return (font, size * kernRatio)
}

func makeSocialCard(favicon: NSBitmapImageRep) throws -> NSBitmapImageRep {
  let width = 1200
  let height = 630
  let output = try makeBitmap(width: width, height: height)

  NSGraphicsContext.saveGraphicsState()
  NSGraphicsContext.current = NSGraphicsContext(bitmapImageRep: output)
  paper.setFill()
  NSRect(x: 0, y: 0, width: width, height: height).fill()

  let title = "Gemma Antuzzi"
  let (titleFont, titleKern) = fittedFont(name: "Arial", maxSize: 164, text: title, maxWidth: 1090, kernRatio: -0.055)
  let titleStyle = NSMutableParagraphStyle()
  titleStyle.lineBreakMode = .byClipping
  (title as NSString).draw(
    at: NSPoint(x: 52, y: 294),
    withAttributes: [
      .font: titleFont,
      .foregroundColor: ink,
      .kern: titleKern,
      .paragraphStyle: titleStyle,
    ]
  )

  green.setFill()
  NSRect(x: 55, y: 264, width: 310, height: 6).fill()

  let role = "Visual & Multimedia Designer"
  let roleFont = NSFont(name: "Arial", size: 42) ?? NSFont.systemFont(ofSize: 42)
  (role as NSString).draw(
    at: NSPoint(x: 52, y: 192),
    withAttributes: [
      .font: roleFont,
      .foregroundColor: ink,
      .kern: -1.6,
    ]
  )

  let label = "PORTFOLIO / CV · 2026"
  let labelFont = NSFont(name: "Arial Bold", size: 18) ?? NSFont.boldSystemFont(ofSize: 18)
  (label as NSString).draw(
    at: NSPoint(x: 55, y: 548),
    withAttributes: [
      .font: labelFont,
      .foregroundColor: muted,
      .kern: 2.2,
    ]
  )

  guard let faviconImage = NSImage(data: try pngData(from: favicon)) else {
    throw NSError(domain: "BrandAssets", code: 5, userInfo: [NSLocalizedDescriptionKey: "Impossibile inserire il doodle"])
  }
  faviconImage.draw(
    in: NSRect(x: 980, y: 458, width: 165, height: 165),
    from: .zero,
    operation: .sourceOver,
    fraction: 1,
    respectFlipped: false,
    hints: [.interpolation: NSImageInterpolation.high]
  )

  NSGraphicsContext.restoreGraphicsState()
  return output
}

do {
  let source = try bitmap(from: starsURL)
  let favicon = try makeFavicon(from: source)
  try pngData(from: favicon).write(to: faviconURL)

  let socialCard = try makeSocialCard(favicon: favicon)
  try pngData(from: socialCard).write(to: socialCardURL)

  print("Creati \(faviconURL.lastPathComponent) e \(socialCardURL.lastPathComponent)")
} catch {
  fputs("Errore: \(error.localizedDescription)\n", stderr)
  exit(1)
}
