# Quick Start Guide - Person Management App

## Current Status
✅ Server is running on http://localhost:3000  
⚠️ MongoDB connection needed

## Fastest Setup (5 minutes) - MongoDB Atlas FREE

### Step 1: Create MongoDB Atlas Account
1. Go to: https://www.mongodb.com/cloud/atlas/register
2. Sign up with Google/GitHub or email (it's FREE)
3. Choose the FREE tier (M0)

### Step 2: Create a Cluster
1. After login, click "Build a Database"
2. Choose **FREE** tier (M0 Sandbox)
3. Select a cloud provider and region (any is fine)
4. Click "Create Cluster" (takes 3-5 minutes)

### Step 3: Create Database User
1. Click "Database Access" in left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Username: `personapp`
5. Password: Create a strong password (save it!)
6. User Privileges: "Read and write to any database"
7. Click "Add User"

### Step 4: Allow Network Access
1. Click "Network Access" in left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for testing)
4. Click "Confirm"

### Step 5: Get Connection String
1. Go back to "Database" (left sidebar)
2. Click "Connect" button on your cluster
3. Choose "Connect your application"
4. Copy the connection string (looks like):
   ```
   mongodb+srv://personapp:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```

### Step 6: Configure Your App
1. In your project folder (`c:\Users\USER\OneDrive\Desktop\new`), create a file named `.env`
2. Add this line (replace with YOUR connection string):
   ```
   MONGODB_URI=mongodb+srv://personapp:YOUR_PASSWORD@cluster0.xxxxx.mongodb.net/persondb?retryWrites=true&w=majority
   PORT=3000
   ```
3. **IMPORTANT**: Replace `<password>` with your actual password
4. **IMPORTANT**: Add `/persondb` before the `?` in the URL

### Step 7: Restart the Server
1. Stop the current server (Ctrl+C in terminal)
2. Run: `node server.js`
3. You should see: ✅ MongoDB Connected Successfully

### Step 8: Test the App
1. Open browser: http://localhost:3000/person
2. Click "Add New Person"
3. Fill the form and submit
4. You should see your person in the list!

---

## Alternative: Local MongoDB (More Complex)

### Windows
1. Download: https://www.mongodb.com/try/download/community
2. Install with default settings
3. Start MongoDB:
   ```powershell
   net start MongoDB
   ```
4. Restart your app: `node server.js`

### macOS
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu)
```bash
sudo apt-get install mongodb
sudo systemctl start mongod
```

---

## Troubleshooting

### "Error fetching people"
- MongoDB is not connected
- Check server console for connection errors
- Verify `.env` file has correct connection string

### "Authentication failed"
- Check username and password in connection string
- Make sure you created a database user in Atlas

### "Network timeout"
- Check Network Access in Atlas
- Make sure your IP is whitelisted

### "Cannot connect to localhost:27017"
- Local MongoDB is not running
- Use MongoDB Atlas instead (easier)

---

## What's Next?

Once MongoDB is connected, you can:
- ✅ Create new people
- ✅ View all people in a table
- ✅ Edit existing people
- ✅ Delete people
- ✅ All data persists in MongoDB

---

## Need Help?

Check the full README.md for more details:
- Project structure
- API routes
- Validation rules
- Advanced configuration
