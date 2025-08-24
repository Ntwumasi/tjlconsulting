# Sanity CMS Setup Guide

## 🚀 Quick Setup

Your TJL Consulting website now has a complete CMS backend! Here's how to set it up:

### Step 1: Create Sanity Project
1. Go to [sanity.io](https://sanity.io) and sign up/login
2. Create a new project called "TJL Consulting"
3. Choose "Blog" template (we'll customize it)
4. Note your **Project ID**

### Step 2: Configure Environment Variables
1. Copy `.env.local.example` to `.env.local`
2. Add your Sanity Project ID:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID="your_project_id_here"
```

### Step 3: Access Your CMS
Visit `http://localhost:3000/admin` to access your content management system!

## 📝 What You Can Edit

### Homepage Content
- Hero title and subtitle
- Button text
- Services section content
- Target markets list
- Call-to-action sections

### Services
- Service titles and descriptions
- Features lists
- Pricing information
- Display order

### About Page
- Mission and vision statements
- Competitive advantages
- Target market information
- Growth roadmap
- Financial targets

### Contact Page
- Page headlines and descriptions
- Process steps
- Investment ranges
- CTA content

### Site Settings
- Company information
- Navigation menu
- Footer content
- SEO metadata

## 🔧 Development Commands

```bash
# Start Next.js development server
npm run dev

# Start Sanity Studio (alternative)
npm run studio

# Access admin panel
http://localhost:3000/admin
```

## 🎨 Content Management Features

✅ **Visual Editor** - Edit content with live preview  
✅ **Rich Text** - Format text with headings, lists, links  
✅ **Media Management** - Upload and manage images  
✅ **Content Validation** - Ensure required fields are filled  
✅ **Live Updates** - Changes appear instantly on your site  
✅ **Version History** - Track content changes over time  

## 📱 Mobile Ready
The admin panel works perfectly on tablets and mobile devices for on-the-go content updates.

## 🔒 Security
- Authentication required for admin access
- Content is served from Sanity's global CDN
- Automatic backups and version control

## 💡 Tips for Content Editing

1. **Keep it concise** - Shorter paragraphs read better online
2. **Use bullet points** - Break up long text with lists
3. **Update regularly** - Fresh content improves SEO
4. **Test changes** - Preview before publishing

Your content management system is now ready to use! 🎉