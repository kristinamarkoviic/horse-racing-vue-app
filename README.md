# 🐎 Horse Racing Vue 3 Game

A modern, interactive horse racing simulation game built with Vue 3. 
Experience the thrill of horse racing with real-time animations and detailed statistics.

## Features

### Game Features
- **6-Round Racing System** - Complete racing seasons with varying distances (1200m - 2200m)
- **20 Unique Horses** - Each with distinct colors, names, and condition scores
- **Real-time Race Simulation** - Watch horses compete with animated progress bars
- **Dynamic Horse Selection** - 10 random horses selected for each round
- **Race Control System** - Start, pause, resume, and stop races
- **Comprehensive Results** - Round-by-round results with winner tracking

### UI/UX Features
- **Modern Dark Theme** 
- **Responsive Design**
- **Interactive Components**
- **Real-time Updates**
- **Slider Navigation**

### Technical Features
- **Vue 3 Composition API**
- **TypeScript**
- **Vuex State Management**
- **Tailwind CSS**
- **Component Architecture**

## Getting Started

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/kristinamarkoviic/horse-racing-vue-app.git
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run serve
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080`

## How to Play

### Starting a Race
2. **Start Race** - Click "Start Race" to begin the simulation
3. **Watch Progress** - Observe horses racing with real-time position updates
4. **Control Race** - Use pause/resume/stop controls as needed

### Understanding the Game
- **Horse Condition** - Affects racing performance (1-100 scale)
- **Round Distance** - Varies (1200m, 1400m, 1600m, 1800m, 2000m, 2200m)
- **Round System** - Complete 6 rounds to finish a full race season
- **Results Tracking** - View detailed results for each completed round

## Development

### Available Scripts

```bash
# Development server with hot-reload
npm run serve

# Build for production
npm run build

# Run unit tests
npm run test:unit

# Lint and fix code
npm run lint

# Run tests in watch mode
npm run test:watch
```

### Project Structure

```
src/
├── components/
│   ├── layout/          # Header, Logo components
│   ├── race/            # Race-related components
│   ├── race-horse/      # Horse display components
│   └── shared/          # Reusable UI components
├── composables/         # Vue 3 composables
├── router/              # Vue Router configuration
├── store/               # Vuex store modules
├── ts/                  # TypeScript interfaces and types
└── views/               # Page components
```

### Key Components

- **`RaceControl.vue`** - Game controls and status display
- **`RaceTrack.vue`** - Race visualization with animated horses
- **`RaceResults.vue`** - Results slider with round navigation
- **`RaceHorseTable.vue`** - Horse list with condition scores
- **`useRaceGame.ts`** - Core game logic composable

## Customization

### Styling
The project uses Tailwind CSS for styling. Key color variables:
- **Primary**: Green gradient theme
- **Background**: Dark gray (`bg-gray-900`)
- **Race Track**: Custom ground colors (amber, emerald, etc.)

### Game Configuration
Modify game settings in `src/composables/useRaceGame.ts`:
- Round distances
- Number of horses per round
- Simulation speed
- Race duration

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feat/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feat/amazing-feature`)
5. Open a Pull Request

⭐ **Star this repository if you found it helpful!**
