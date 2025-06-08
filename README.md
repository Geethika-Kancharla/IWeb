# IWeb

IWeb is a web application that helps visually impaired users by detecting objects in images or webcam feeds and reading them aloud using text-to-speech.

## Features
- Real-time object detection (YOLO)
- Text-to-speech for detected objects
- Adjustable voice pitch, rate, and volume
- Simple, accessible interface

## Tech Stack
- React & Tailwind CSS (Frontend)
- Flask & YOLOv3 (Backend)
- Web Speech API (Text-to-Speech)

## Getting Started
1. Clone the repo and install dependencies for both client and server.
2. Download `yolov3.weights` from the official YOLO website and place it in the `server` folder (not included in repo).
3. Start the Flask server: `python app.py` in the `server` folder.
4. Start the React client: `npm start` in the `client` folder.

---

