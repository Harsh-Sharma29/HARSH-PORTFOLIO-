# Backend API - Portfolio Contact Form

Express.js backend server for handling contact form submissions.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Create environment file
copy .env.example .env

# Configure your SMTP credentials in .env
# Then start the server
npm start
```

Server will run on **http://localhost:3001**

## 📦 Dependencies

- **express** - Web framework
- **cors** - Enable CORS for frontend
- **body-parser** - Parse JSON requests
- **nodemailer** - Send emails
- **dotenv** - Environment variables

## 🔧 Configuration

Create a `.env` file with:

```env
# SMTP Configuration (Gmail example)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password

# Frontend URL for CORS
FRONTEND_URL=http://localhost:5173

# Server port
PORT=3001
```

### Gmail Setup

1. Enable 2-Factor Authentication
2. Generate App Password: [https://myaccount.google.com/apppasswords](https://myaccount.google.com/apppasswords)
3. Use App Password in `SMTP_PASS`

## 📡 API Endpoints

### POST /api/contact

Submit contact form.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### GET /api/health

Health check endpoint.

**Response:**
```json
{
  "status": "OK",
  "message": "Portfolio backend is running"
}
```

## 🔒 Security Features

- CORS configured for specific frontend URL
- Server-side input validation
- Email format validation
- Message length validation
- Error handling for all endpoints

## 🚀 Deployment

### Railway

1. Push to GitHub
2. Create new project on Railway
3. Connect GitHub repo
4. Set root directory to `backend`
5. Add environment variables
6. Deploy

### Render

1. Create new Web Service
2. Connect GitHub repo
3. Set root directory to `backend`
4. Add environment variables:
   - `SMTP_USER`
   - `SMTP_PASS`
   - `FRONTEND_URL`
5. Deploy

### Vercel (Serverless)

1. Create `api/contact.js` with serverless function
2. Configure environment variables
3. Deploy

## 📝 Development Mode

If SMTP credentials are not set, the server will log submissions to console instead:

```
📧 Contact Form Submission:
Name: John Doe
Email: john@example.com
Message: Hello...
---
```

## 🧪 Testing

Test with curl:

```bash
curl -X POST http://localhost:3001/api/contact \
  -H "Content-Type: application/json" \
  -d '{"name":"Test User","email":"test@example.com","message":"This is a test message from the contact form."}'
```

Expected response:
```json
{"success":true,"message":"Message sent successfully!"}
```

## 🔧 Troubleshooting

### SMTP Errors

- Check Gmail security settings
- Verify App Password is correct
- Enable "Less secure app access" if needed
- Check SMTP host and port

### CORS Errors

- Verify `FRONTEND_URL` matches your frontend URL exactly
- Include protocol (http:// or https://)
- No trailing slash

### Port Already in Use

```bash
# Change PORT in .env
PORT=3002
```

## 📄 License

MIT
