const fs = require('fs');
const path = require('path');
const axios = require('axios');

// Create directories if they don't exist
const directories = [
    'public/images',
    'public/images/workouts',
    'public/images/exercises',
    'public/images/nutrition'
];

directories.forEach(dir => {
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
});

// Image configurations with specific search terms for each image
const imageConfigs = {
    // Main images
    'logo.png': { width: 200, height: 200 },
    'hero-workout.jpg': { width: 1200, height: 800 },
    'about-team.jpg': { width: 1200, height: 800 },
    'testimonial-1.jpg': { width: 200, height: 200 },
    'testimonial-2.jpg': { width: 200, height: 200 },
    'testimonial-3.jpg': { width: 200, height: 200 },
    'team-1.jpg': { width: 300, height: 300 },
    'team-2.jpg': { width: 300, height: 300 },
    'team-3.jpg': { width: 300, height: 300 },
    'team-4.jpg': { width: 300, height: 300 },

    // Workout images
    'workouts/strength-fundamentals.jpg': { width: 800, height: 600 },
    'workouts/hiit-fat-burn.jpg': { width: 800, height: 600 },
    'workouts/yoga-flexibility.jpg': { width: 800, height: 600 },
    'workouts/upper-body-blast.jpg': { width: 800, height: 600 },
    'workouts/core-crusher.jpg': { width: 800, height: 600 },

    // Exercise images
    'exercises/goblet-squat.jpg': { width: 600, height: 400 },
    'exercises/dumbbell-bench-press.jpg': { width: 600, height: 400 },
    'exercises/bent-over-row.jpg': { width: 600, height: 400 },
    'exercises/shoulder-press.jpg': { width: 600, height: 400 },
    'exercises/romanian-deadlift.jpg': { width: 600, height: 400 },
    'exercises/jumping-jacks.jpg': { width: 600, height: 400 },
    'exercises/mountain-climbers.jpg': { width: 600, height: 400 },
    'exercises/burpees.jpg': { width: 600, height: 400 },
    'exercises/high-knees.jpg': { width: 600, height: 400 },
    'exercises/plank-jacks.jpg': { width: 600, height: 400 },
    'exercises/downward-dog.jpg': { width: 600, height: 400 },
    'exercises/lunge-twist.jpg': { width: 600, height: 400 },
    'exercises/forward-fold.jpg': { width: 600, height: 400 },
    'exercises/pigeon-pose.jpg': { width: 600, height: 400 },
    'exercises/spinal-twist.jpg': { width: 600, height: 400 },
    'exercises/push-ups.jpg': { width: 600, height: 400 },
    'exercises/pull-ups.jpg': { width: 600, height: 400 },
    'exercises/bicep-curls.jpg': { width: 600, height: 400 },
    'exercises/tricep-dips.jpg': { width: 600, height: 400 },
    'exercises/plank.jpg': { width: 600, height: 400 },
    'exercises/russian-twists.jpg': { width: 600, height: 400 },
    'exercises/bicycle-crunches.jpg': { width: 600, height: 400 },
    'exercises/dead-bug.jpg': { width: 600, height: 400 },
    'exercises/superman.jpg': { width: 600, height: 400 },

    // Nutrition images
    'nutrition/protein-muscle.jpg': { width: 800, height: 600 },
    'nutrition/carb-cycling.jpg': { width: 800, height: 600 },
    'nutrition/hydration.jpg': { width: 800, height: 600 },
    'nutrition/muscle-meal-plan.jpg': { width: 800, height: 600 },
    'nutrition/fat-loss-meal-plan.jpg': { width: 800, height: 600 },
    'nutrition/maintenance-meal-plan.jpg': { width: 800, height: 600 }
};

async function downloadImage(filename, config) {
    try {
        const filepath = path.join('public/images', filename);
        const url = `https://source.unsplash.com/random/${config.width}x${config.height}?fitness,${filename.split('/').pop().split('.')[0]}`;

        const response = await axios({
            url,
            method: 'GET',
            responseType: 'stream',
            maxRedirects: 5,
        });

        const writer = fs.createWriteStream(filepath);
        response.data.pipe(writer);

        return new Promise((resolve, reject) => {
            writer.on('finish', () => {
                console.log(`Downloaded: ${filename}`);
                resolve();
            });
            writer.on('error', reject);
        });
    } catch (error) {
        console.error(`Error downloading ${filename}:`, error.message);
    }
}

async function downloadAllImages() {
    console.log('Starting image downloads...');
    
    // Download images in batches to avoid rate limiting
    const batchSize = 3;
    const entries = Object.entries(imageConfigs);
    
    for (let i = 0; i < entries.length; i += batchSize) {
        const batch = entries.slice(i, i + batchSize);
        await Promise.all(batch.map(([filename, config]) => downloadImage(filename, config)));
        
        // Wait between batches to avoid rate limiting
        if (i + batchSize < entries.length) {
            await new Promise(resolve => setTimeout(resolve, 1000));
        }
    }
    
    console.log('All image downloads completed!');
}

downloadAllImages(); 