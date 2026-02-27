# OM Automotive Battery Site - Image Instructions

This project is set up to display dynamic "scrollytelling" animations for batteries. As placeholders, we are currently using the VRLA (Mango) assets for all products to ensure stability.

## How to Add Real Battery Images

To replace the placeholders with real battery images for each product, follow these steps:

### 1. Prepare Your Images
For each battery type (Tubular, Lead Acid, Lithium), you need a sequence of images (frames) that create a rotating or moving animation.
-   **Format**: JPG or WEBP (WEBP is smaller/faster).
-   **Naming**: `battery-frame-001.jpg`, `battery-frame-002.jpg`, etc.
-   **Count**: Ideally 100-200 frames for a smooth scroll.

### 2. Create Folders
Create the following folders in your project:
-   `public/images/tubular`
-   `public/images/lead-acid`
-   `public/images/lithium`

### 3. Upload Images
Place your image sequences into their respective folders.

### 4. Update Code (`data/products.ts`)
Open `data/products.ts` and update the configuration for each product:

```typescript
{
    id: "tubular",
    // ...
    folderPath: "/images/tubular", // Update this path
    imagePattern: "battery-frame-{000}.jpg", // Update pattern (e.g. {000} matches 001, 002)
    frameCount: 150, // Update total number of images
    // ...
}
```

Repeat this for `lead-acid` and `lithium`.

### 5. Verify
Run `npm run dev` and test each product. The animation should now use your new battery images!

---
**Note:** Ensure all images in a sequence have the same dimensions for the best "cover" fit.
