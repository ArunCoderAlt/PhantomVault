console.log('Step 1: Start');
try {
    require('dotenv').config();
    console.log('Step 2: Dotenv loaded');
    const app = require('./src/app');
    console.log('Step 3: App loaded');
    const connectDB = require('./src/config/db');
    console.log('Step 4: DB Config loaded');
} catch (e) {
    console.error('Crash:', e);
}
