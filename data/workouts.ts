export const workouts = [
  {
    id: "strength-fundamentals",
    title: "Strength Training Fundamentals",
    description:
      "A comprehensive full-body strength program designed for beginners to build a solid foundation of strength and muscle.",
    duration: "45 minutes",
    level: "Beginner",
    category: "Strength",
    targetMuscles: ["Full Body"],
    calories: 350,
    equipment: ["Dumbbells", "Bench", "Resistance Bands"],
    featured: true,
    image: "/images/workouts/strength-fundamentals.jpg",
    exercises: [
      {
        name: "Goblet Squat",
        sets: 3,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Hold a dumbbell close to your chest. Stand with feet shoulder-width apart. Lower your body until your thighs are parallel to the ground, then push back up.",
        image: "/images/exercises/goblet-squat.jpg",
      },
      {
        name: "Dumbbell Bench Press",
        sets: 3,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Lie on a bench with a dumbbell in each hand at chest level. Press the weights up until your arms are fully extended, then lower back down.",
        image: "/images/exercises/dumbbell-bench-press.jpg",
      },
      {
        name: "Bent-Over Dumbbell Row",
        sets: 3,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Bend at the hips with a slight knee bend, back straight. Hold dumbbells with arms extended, then pull them up to your sides, squeezing your shoulder blades together.",
        image: "/images/exercises/bent-over-row.jpg",
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 3,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Sit or stand with dumbbells at shoulder height. Press the weights overhead until arms are extended, then lower back down.",
        image: "/images/exercises/shoulder-press.jpg",
      },
      {
        name: "Romanian Deadlift",
        sets: 3,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Hold dumbbells in front of your thighs. Hinge at the hips while keeping your back straight, lowering the weights toward the floor. Return to standing by driving your hips forward.",
        image: "/images/exercises/romanian-deadlift.jpg",
      },
    ],
  },
  {
    id: "hiit-fat-burn",
    title: "HIIT Fat Burner",
    description:
      "A high-intensity interval training workout designed to maximize calorie burn and improve cardiovascular fitness in minimal time.",
    duration: "30 minutes",
    level: "Intermediate",
    category: "HIIT",
    targetMuscles: ["Full Body", "Cardiovascular"],
    calories: 450,
    equipment: ["None", "Optional: Dumbbells"],
    featured: true,
    image: "/images/workouts/hiit-fat-burn.jpg",
    exercises: [
      {
        name: "Jumping Jacks",
        sets: 4,
        reps: "45 seconds",
        rest: "15 seconds",
        instructions:
          "Start with feet together and arms at sides, then jump while spreading legs and raising arms overhead. Return to starting position and repeat.",
        image: "/images/exercises/jumping-jacks.jpg",
      },
      {
        name: "Mountain Climbers",
        sets: 4,
        reps: "45 seconds",
        rest: "15 seconds",
        instructions:
          "Start in a high plank position. Alternate bringing each knee toward your chest in a running motion while keeping your core engaged.",
        image: "/images/exercises/mountain-climbers.jpg",
      },
      {
        name: "Burpees",
        sets: 4,
        reps: "45 seconds",
        rest: "15 seconds",
        instructions:
          "Begin standing, then squat down and place hands on floor. Jump feet back to plank, perform a push-up, jump feet forward, and explode upward with a jump.",
        image: "/images/exercises/burpees.jpg",
      },
      {
        name: "High Knees",
        sets: 4,
        reps: "45 seconds",
        rest: "15 seconds",
        instructions:
          "Run in place, lifting knees as high as possible toward chest. Keep core engaged and maintain a quick pace.",
        image: "/images/exercises/high-knees.jpg",
      },
      {
        name: "Plank Jacks",
        sets: 4,
        reps: "45 seconds",
        rest: "15 seconds",
        instructions:
          "Start in plank position. Jump feet out wide and then back together, similar to a jumping jack motion but in plank position.",
        image: "/images/exercises/plank-jacks.jpg",
      },
    ],
  },
  {
    id: "yoga-flexibility",
    title: "Yoga for Flexibility",
    description:
      "A gentle yoga flow focused on increasing flexibility, improving range of motion, and reducing muscle tension.",
    duration: "40 minutes",
    level: "All Levels",
    category: "Yoga",
    targetMuscles: ["Full Body", "Flexibility"],
    calories: 200,
    equipment: ["Yoga Mat", "Optional: Yoga Blocks"],
    featured: true,
    image: "/images/workouts/yoga-flexibility.jpg",
    exercises: [
      {
        name: "Downward Facing Dog",
        sets: 1,
        reps: "60 seconds",
        rest: "Brief transition",
        instructions:
          "Start on hands and knees, then lift hips up and back to form an inverted V shape. Press heels toward the floor and relax your head between your arms.",
        image: "/images/exercises/downward-dog.jpg",
      },
      {
        name: "Low Lunge with Twist",
        sets: 1,
        reps: "45 seconds each side",
        rest: "Brief transition",
        instructions:
          "From downward dog, step one foot forward between hands. Lower back knee to mat, lift torso, and twist toward front leg. Place opposite elbow on outside of front knee.",
        image: "/images/exercises/lunge-twist.jpg",
      },
      {
        name: "Seated Forward Fold",
        sets: 1,
        reps: "60 seconds",
        rest: "Brief transition",
        instructions:
          "Sit with legs extended forward. Hinge at hips and reach toward toes, keeping spine long. Hold and breathe deeply, feeling the stretch in hamstrings.",
        image: "/images/exercises/forward-fold.jpg",
      },
      {
        name: "Pigeon Pose",
        sets: 1,
        reps: "60 seconds each side",
        rest: "Brief transition",
        instructions:
          "From downward dog, bring one knee forward behind wrist. Extend opposite leg back. Square hips to front of mat and fold forward for a deeper hip opener.",
        image: "/images/exercises/pigeon-pose.jpg",
      },
      {
        name: "Supine Spinal Twist",
        sets: 1,
        reps: "45 seconds each side",
        rest: "Brief transition",
        instructions:
          "Lie on back with arms extended in T position. Bend knees, then lower them to one side while keeping shoulders grounded. Turn head in opposite direction of knees.",
        image: "/images/exercises/spinal-twist.jpg",
      },
    ],
  },
  {
    id: "upper-body-blast",
    title: "Upper Body Blast",
    description:
      "An intense upper body workout targeting chest, back, shoulders, and arms for strength and muscle definition.",
    duration: "50 minutes",
    level: "Intermediate",
    category: "Strength",
    targetMuscles: ["Chest", "Back", "Shoulders", "Arms"],
    calories: 400,
    equipment: ["Dumbbells", "Bench", "Pull-up Bar"],
    featured: false,
    image: "/images/workouts/upper-body-blast.jpg",
    exercises: [
      {
        name: "Push-ups",
        sets: 4,
        reps: "12-15",
        rest: "45 seconds",
        instructions:
          "Start in a high plank position with hands slightly wider than shoulder-width. Lower your body until chest nearly touches the floor, then push back up.",
        image: "/images/exercises/push-ups.jpg",
      },
      {
        name: "Dumbbell Shoulder Press",
        sets: 4,
        reps: "10-12",
        rest: "60 seconds",
        instructions:
          "Sit or stand with dumbbells at shoulder height. Press the weights overhead until arms are extended, then lower back down.",
        image: "/images/exercises/shoulder-press.jpg",
      },
      {
        name: "Pull-ups",
        sets: 4,
        reps: "8-10",
        rest: "60 seconds",
        instructions:
          "Hang from a pull-up bar with hands slightly wider than shoulder-width. Pull your body up until chin clears the bar, then lower back down with control.",
        image: "/images/exercises/pull-ups.jpg",
      },
      {
        name: "Dumbbell Bicep Curls",
        sets: 3,
        reps: "12 each arm",
        rest: "45 seconds",
        instructions:
          "Stand with dumbbells at sides, palms facing forward. Curl weights toward shoulders while keeping elbows close to body, then lower back down.",
        image: "/images/exercises/bicep-curls.jpg",
      },
      {
        name: "Tricep Dips",
        sets: 3,
        reps: "12-15",
        rest: "45 seconds",
        instructions:
          "Sit on edge of bench with hands gripping edge. Slide buttocks off bench and lower body by bending elbows. Push back up until arms are straight.",
        image: "/images/exercises/tricep-dips.jpg",
      },
    ],
  },
  {
    id: "core-crusher",
    title: "Core Crusher",
    description:
      "A targeted core workout to strengthen your abs, obliques, and lower back for improved stability and definition.",
    duration: "30 minutes",
    level: "All Levels",
    category: "Core",
    targetMuscles: ["Abs", "Obliques", "Lower Back"],
    calories: 250,
    equipment: ["Mat", "Optional: Medicine Ball"],
    featured: false,
    image: "/images/workouts/core-crusher.jpg",
    exercises: [
      {
        name: "Plank",
        sets: 3,
        reps: "45 seconds",
        rest: "30 seconds",
        instructions:
          "Start in forearm plank position with elbows under shoulders and body in a straight line. Engage core and hold the position.",
        image: "/images/exercises/plank.jpg",
      },
      {
        name: "Russian Twists",
        sets: 3,
        reps: "20 total (10 each side)",
        rest: "30 seconds",
        instructions:
          "Sit with knees bent and feet lifted slightly off the ground. Lean back slightly, engage core, and twist torso from side to side.",
        image: "/images/exercises/russian-twists.jpg",
      },
      {
        name: "Bicycle Crunches",
        sets: 3,
        reps: "30 total (15 each side)",
        rest: "30 seconds",
        instructions:
          "Lie on back with hands behind head. Lift shoulders off mat and bring opposite elbow to knee while extending other leg, alternating sides.",
        image: "/images/exercises/bicycle-crunches.jpg",
      },
      {
        name: "Dead Bug",
        sets: 3,
        reps: "10 each side",
        rest: "30 seconds",
        instructions:
          "Lie on back with arms extended up and legs in tabletop position. Lower opposite arm and leg toward floor while keeping lower back pressed into mat.",
        image: "/images/exercises/dead-bug.jpg",
      },
      {
        name: "Superman",
        sets: 3,
        reps: "12",
        rest: "30 seconds",
        instructions:
          "Lie face down with arms extended overhead. Simultaneously lift arms, chest, and legs off the floor, hold briefly, then lower back down.",
        image: "/images/exercises/superman.jpg",
      },
    ],
  },
]

