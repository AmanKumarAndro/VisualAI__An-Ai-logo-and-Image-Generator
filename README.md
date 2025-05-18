# AI Image & Logo Generator 🎨✨

This is a Vite + React-based web app that uses Hugging Face's inference API to generate **AI images and logos** based on text prompts.

## ✨ Features

- 🎨 Generate AI images from user prompts
- 🖋️ Dedicated **logo generation page**
- 🔄 Loader spinner during generation
- 🧠 Hugging Face FLUX model integration
- 💡 Live image preview
- ⚡ Fast development with Vite + Tailwind CSS

---

## 🚀 Getting Started

### 1. Clone the repo

```bash
git clone https://github.com/AmanKumarAndro/VisualAI__An-Ai-logo-and-Image-Generator
cd ai-image-generator
```

### 2. Install dependencies

```bash
npm install
# or
yarn
```

### 3. Configure environment variables

Create a `.env.local` file in the root of the project:

```env
VITE_HF_API_TOKEN=your_huggingface_api_token
VITE_HF_API_URL=https://router.huggingface.co/hf-inference/models/black-forest-labs/FLUX.1-dev
```

### 4. Start the dev server

```bash
npm run dev
```

---

## 🧠 How It Works

- Prompts entered in the input field are sent to Hugging Face’s model endpoint.
- The model generates an image and returns it as a binary blob.
- The app converts it to a URL and displays the image.

---

## 🖼️ Logo Generator

In addition to regular image generation, there's a **dedicated page** for logo creation. You can customize prompts to create minimal or stylized logos.

---

## 📁 Project Structure

```
src/
├── assets/              # Static assets
├── components/          # Reusable components
│   ├── Generator.jsx    # Main image generator page
│   └── LogoGenerator.jsx# Logo generation page
├── App.jsx
└── main.jsx
```

---

## 🔐 Security Note

**Do not expose private API tokens in production.**
For security, proxy the request through a backend or use secure server-side routes.

---

## 📄 License

MIT

---

## 💡 Ideas for Future

- Download button for generated images
- Prompt history & saving
- Dark mode support
- Backend proxy for token protection
```
