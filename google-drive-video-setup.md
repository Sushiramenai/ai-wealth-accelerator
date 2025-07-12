# Google Drive Video Setup - Quick Guide

## Step 1: Upload Videos to Google Drive

1. **Create a folder structure:**
   ```
   AI Fortune Academy Videos/
   ├── Module 1 - Foundation/
   │   ├── Lesson 1.1 - Job Trap.mp4
   │   ├── Lesson 1.2 - AI Revolution.mp4
   │   ├── Lesson 1.3 - Mindset Shift.mp4
   │   ├── Lesson 1.4 - Escape Plan.mp4
   │   ├── Lesson 1.5 - Command Center.mp4
   │   ├── Lesson 1.6 - Timeline.mp4
   │   └── Lesson 1.7 - CEO Psychology.mp4
   └── Module 2 - AI Mastery/
       └── (future videos)
   ```

2. **Upload your videos:**
   - Drag and drop into appropriate folders
   - Wait for upload to complete

## Step 2: Set Sharing Permissions

1. **Right-click on the main folder** (AI Fortune Academy Videos)
2. Click "Share"
3. Click "Anyone with the link"
4. Ensure it's set to "Viewer" (not editor)
5. Click "Done"

## Step 3: Get Embed Links

1. **Open a video in Google Drive**
2. Click the three dots menu (⋮)
3. Click "Open in new window"
4. In the new window, click three dots again
5. Click "Embed item"
6. Copy the `<iframe>` code

## Step 4: Extract Video ID

From the embed code, you need just the ID:
```
<iframe src="https://drive.google.com/file/d/XXXXXXXXXXX/preview" ...>
```
The ID is the `XXXXXXXXXXX` part.

## Example Video IDs Format:
```javascript
const moduleVideos = {
  "1.1": "1a2B3c4D5e6F7g8H9i0",  // Job Trap
  "1.2": "2b3C4d5E6f7G8h9I0j1",  // AI Revolution
  "1.3": "3c4D5e6F7g8H9i0J1k2",  // Mindset
  "1.4": "4d5E6f7G8h9I0j1K2l3",  // Escape Plan
  "1.5": "5e6F7g8H9i0J1k2L3m4",  // Command Center
  "1.6": "6f7G8h9I0j1K2l3M4n5",  // Timeline
  "1.7": "7g8H9i0J1k2L3m4N5o6"   // CEO Psychology
};
```

## Step 5: Update course-access-enhanced.html

Add this code to display videos:
```html
<div class="video-container">
  <iframe 
    src="https://drive.google.com/file/d/YOUR_VIDEO_ID/preview" 
    width="100%" 
    height="480" 
    allow="autoplay"
    allowfullscreen>
  </iframe>
</div>
```

## Alternative: Using YouTube (Unlisted)

If Google Drive is slow:
1. Upload to YouTube as "Unlisted"
2. Get the embed code
3. Use YouTube's better streaming

## Pro Tips:
- Keep videos under 500MB for faster loading
- Use 720p resolution (good quality, smaller size)
- Name files clearly for easy management
- Create a backup on another cloud service

## Testing:
1. Open course page in incognito mode
2. Try to access videos (should work without login)
3. Test on mobile device
4. Check loading speed

Remember: Students should be able to watch without needing a Google account!