import React, { useState, useEffect, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const GameHosting = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [hoveredGame, setHoveredGame] = useState(null);
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Calculate time until Diwali (November 12, 2023)
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +new Date('2023-11-12') - +new Date();
      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        };
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    };

    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const games = [
    {
      id: 1,
      name: 'GTA 5 FIVEM',
      image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=500&h=300&fit=crop',
      available: true,
      path: '/services/fivem-hosting',
      discount: 25
    },
    {
      id: 2,
      name: 'Minecraft',
      image: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&h=300&fit=crop',
      available: true,
      path: '/services/minecraft-hosting',
      discount: 30
    },
    {
      id: 3,
      name: 'RUST',
      image: 'https://images.unsplash.com/photo-1538481199705-c710c4e965fc?w=500&h=300&fit=crop',
      available: true,
      path: '/services/rust-hosting',
      discount: 20
    },
    {
      id: 4,
      name: 'Valheim',
      image: 'https://images.unsplash.com/photo-1511882150382-421056c89033?w=500&h=300&fit=crop',
      available: true,
      path: '/services/valheim-hosting',
      discount: 15
    },
    {
      id: 5,
      name: 'ARK: Survival',
      image: 'https://images.unsplash.com/photo-1614732414444-096e5f1122d5?w=500&h=300&fit=crop',
      available: true,
      path: '/services/ark-hosting',
      discount: 20
    },
    {
      id: 6,
      name: 'Terraria',
      image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?w=500&h=300&fit=crop',
      available: true,
      path: '/services/terraria-hosting',
      discount: 25
    },
    {
      id: 7,
      name: 'CS:GO',
      image: 'https://images.unsplash.com/photo-1542751110-97427bbecf20?w=500&h=300&fit=crop',
      available: true,
      path: '/services/csgo-hosting',
      discount: 30
    },
    {
      id: 8,
      name: 'American Truck Simulator',
      image: 'https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=500&h=300&fit=crop',
      available: true,
      path: '/services/ats-hosting',
      discount: 15
    },
    {
      id: 9,
      name: 'Euro Truck Simulator',
      image: 'https://images.unsplash.com/photo-1566024287490-5b97e7d4c5be?w=500&h=300&fit=crop',
      available: true,
      path: '/services/ets-hosting',
      discount: 15
    },
    {
      id: 10,
      name: 'San Andreas Multiplayer',
      image: 'https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=500&h=300&fit=crop',
      available: true,
      path: '/services/samp-hosting',
      discount: 20
    },
    {
      id: 11,
      name: '7 Days to Die',
      image: 'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?w=500&h=300&fit=crop',
      available: true,
      path: '/services/7dtd-hosting',
      discount: 25
    },
    {
      id: 12,
      name: 'The Forest',
      image: 'https://images.unsplash.com/photo-1511407397940-d57f68e81203?w=500&h=300&fit=crop',
      available: true,
      path: '/services/forest-hosting',
      discount: 20
    }
  ];

  const filteredGames = useMemo(() => 
    games.filter(game =>
      game.name.toLowerCase().includes(searchQuery.toLowerCase())
    ),
    [games, searchQuery]
  );

  // Diwali sparkle animation
  const sparkleVariants = {
    initial: { scale: 0, rotate: 0, opacity: 0 },
    animate: {
      scale: [0, 1, 0],
      rotate: [0, 180, 360],
      opacity: [0, 1, 0],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // Firework animation
  const fireworkVariants = {
    initial: { scale: 0, opacity: 1 },
    animate: {
      scale: [0, 1.5, 0],
      opacity: [1, 0.8, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        repeatDelay: 3
      }
    }
  };

  // Floating diya animation
  const diyaVariants = {
    initial: { y: -50, opacity: 0, rotate: 0 },
    animate: {
      y: [ -50, 0, 50 ],
      opacity: [0, 0.7, 0],
      rotate: [0, 10, -10, 0],
      transition: {
        duration: 15 + Math.random() * 10,
        repeat: Infinity,
        ease: "linear"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Game Hosting - Affordable Game Servers | Flarelax Technologies</title>
        <meta name="description" content="Affordable game hosting for Minecraft, CSGO, Rust, and more. Premium game servers with 99.9% uptime. Flarelax - where gaming meets affordability." />
        <meta name="keywords" content="game hosting, affordable game hosting, minecraft hosting, csgo hosting, rust hosting, flarelax, game servers" />
      </Helmet>
      <div className="min-h-screen relative overflow-hidden" style={{
        background: 'linear-gradient(135deg, #1a0a2e 0%, #2d1b4e 25%, #4a1942 50%, #6b2d5c 75%, #1a0a2e 100%)'
      }}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Diyas */}
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`diya-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
            }}
            variants={diyaVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: Math.random() * 5
            }}
          >
            <div className="text-4xl">🪔</div>
          </motion.div>
        ))}

        {/* Sparkles */}
        {[...Array(40)].map((_, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute w-2 h-2 bg-yellow-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: '0 0 10px #ffd700'
            }}
            variants={sparkleVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: Math.random() * 2
            }}
          />
        ))}

        {/* Fireworks */}
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={`firework-${i}`}
            className="absolute"
            style={{
              left: `${20 + i * 15}%`,
              bottom: '10%',
            }}
            variants={fireworkVariants}
            initial="initial"
            animate="animate"
            transition={{
              delay: i * 1.5
            }}
          >
            <div className="text-5xl">🎆</div>
          </motion.div>
        ))}

        {/* Rangoli Pattern Overlay */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, #ffd700 2px, transparent 2px),
                              radial-gradient(circle at 80% 50%, #ff6b9d 2px, transparent 2px),
                              radial-gradient(circle at 40% 20%, #ff9a8b 2px, transparent 2px),
                              radial-gradient(circle at 60% 80%, #a78bfa 2px, transparent 2px)`,
            backgroundSize: '100px 100px'
          }}
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        
        {/* Back Button - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 sm:absolute sm:top-8 sm:left-4 md:left-6 lg:left-8 z-50"
        >
          <Link
            to="/"
            className="group inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-xl border-2 border-yellow-400/50 rounded-xl shadow-2xl hover:shadow-yellow-400/30 transition-all duration-300 hover:scale-105 text-sm sm:text-base"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-yellow-400 rounded-full blur-md opacity-0 group-hover:opacity-50 transition-opacity"></div>
              <svg 
                className="w-5 h-5 text-yellow-400 relative z-10 group-hover:-translate-x-1 transition-transform" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
            </div>
            <span className="text-yellow-200 font-semibold text-sm group-hover:text-yellow-100 transition-colors" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Back to Home
            </span>
            <span className="text-xl group-hover:scale-110 transition-transform">🏠</span>
          </Link>
        </motion.div>

        {/* Festive Header with Countdown */}
        <motion.div 
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <motion.span 
              className="text-5xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, 10, -10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3
              }}
            >🪔</motion.span>
            <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-yellow-300 via-orange-400 to-pink-500 bg-clip-text text-transparent"
              style={{ fontFamily: "'Cinzel', serif" }}>
              Game Hosting Festival
            </h1>
            <motion.span 
              className="text-5xl"
              animate={{ 
                scale: [1, 1.2, 1],
                rotate: [0, -10, 10, 0]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                repeatDelay: 3,
                delay: 0.5
              }}
            >🪔</motion.span>
          </div>
          <p className="text-xl text-yellow-200 font-semibold mb-6" style={{ fontFamily: "'Poppins', sans-serif" }}>
            ✨ Celebrate Diwali with Special Gaming Offers ✨
          </p>
          
          {/* Countdown Timer */}
          <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 mb-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 bg-purple-900/70 px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                {timeLeft.days.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-200 mt-1">Days</div>
            </div>
            <div className="text-xl sm:text-2xl text-yellow-300">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 bg-purple-900/70 px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                {timeLeft.hours.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-200 mt-1">Hours</div>
            </div>
            <div className="text-xl sm:text-2xl text-yellow-300">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 bg-purple-900/70 px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                {timeLeft.minutes.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-200 mt-1">Minutes</div>
            </div>
            <div className="text-xl sm:text-2xl text-yellow-300">:</div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl font-bold text-yellow-300 bg-purple-900/70 px-3 sm:px-4 py-2 rounded-lg shadow-lg">
                {timeLeft.seconds.toString().padStart(2, '0')}
              </div>
              <div className="text-xs text-yellow-200 mt-1">Seconds</div>
            </div>
          </div>
          
          {/* Decorative Border */}
          <div className="flex justify-center mt-6">
            <div className="h-1 w-64 bg-gradient-to-r from-transparent via-yellow-400 to-transparent rounded-full"></div>
          </div>
        </motion.div>

        {/* Search Bar with Diwali Theme */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-16"
        >
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl blur opacity-50 group-hover:opacity-75 transition duration-500"></div>
            <div className="relative">
              <input
                type="text"
                placeholder="Search your game..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-8 py-5 bg-gradient-to-r from-purple-900/90 to-purple-800/90 backdrop-blur-xl border-2 border-yellow-400/30 rounded-2xl text-white placeholder-yellow-200/60 focus:outline-none focus:border-yellow-400 transition-all duration-300 text-lg shadow-2xl"
                style={{ fontFamily: "'Poppins', sans-serif" }}
              />
              <motion.div 
                className="absolute right-6 top-1/2 -translate-y-1/2"
                animate={searchQuery ? {
                  scale: [1, 1.2, 1],
                  rotate: [0, 15, -15, 0]
                } : {}}
                transition={{
                  duration: 0.5,
                  repeat: searchQuery ? Infinity : 0,
                  repeatDelay: 1
                }}
              >
                <svg className="w-6 h-6 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Featured Games Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mb-12 text-center px-4"
        >
          <div className="inline-flex flex-wrap items-center justify-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 backdrop-blur-lg border-2 border-yellow-400/50 rounded-2xl shadow-xl">
            <span className="text-2xl sm:text-3xl">🎮</span>
            <p className="text-yellow-200 font-semibold text-sm sm:text-base md:text-lg" style={{ fontFamily: "'Poppins', sans-serif" }}>
              Featured Diwali Specials: <span className="text-yellow-300 font-bold">Up to 30% OFF</span> on Select Games!
            </p>
            <span className="text-2xl sm:text-3xl">🎮</span>
          </div>
        </motion.div>

        {/* Games Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredGames.map((game, index) => (
            <motion.div
              key={game.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onHoverStart={() => setHoveredGame(game.id)}
              onHoverEnd={() => setHoveredGame(null)}
              className="group relative"
            >
              <Link to={game.path}>
                {/* Glowing Border Effect */}
                <div className={`absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-2xl blur-lg opacity-30 group-hover:opacity-100 transition duration-500 ${
                  hoveredGame === game.id ? 'animate-pulse' : ''
                }`}></div>
                
                {/* Card */}
                <div className="relative h-72 rounded-2xl overflow-hidden border-2 border-yellow-400/40 bg-gradient-to-br from-purple-900 to-purple-800 shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                  
                  {/* Game Image with Overlay */}
                  <div className="absolute inset-0">
                    <div className="w-full h-full bg-gradient-to-br from-purple-900/50 to-pink-900/50 absolute inset-0 z-10 group-hover:opacity-60 transition-opacity duration-500"></div>
                    <img 
                      src={game.image} 
                      alt={game.name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Diya Lamps Decoration */}
                  <div className="absolute top-4 left-4 right-4 flex justify-between z-20 pointer-events-none">
                    <motion.span 
                      className="text-2xl"
                      animate={hoveredGame === game.id ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, 10, -10, 0]
                      } : {}}
                      transition={{ duration: 0.5, repeat: hoveredGame === game.id ? Infinity : 0 }}
                    >
                      🪔
                    </motion.span>
                    <motion.span 
                      className="text-2xl"
                      animate={hoveredGame === game.id ? {
                        scale: [1, 1.3, 1],
                        rotate: [0, -10, 10, 0]
                      } : {}}
                      transition={{ duration: 0.5, repeat: hoveredGame === game.id ? Infinity : 0, delay: 0.2 }}
                    >
                      🪔
                    </motion.span>
                  </div>

                  {/* Discount Badge */}
                  {game.discount && (
                    <div className="absolute top-4 right-4 z-20">
                      <motion.div 
                        className="px-3 py-1.5 bg-gradient-to-r from-red-500 to-orange-500 text-white text-xs font-bold rounded-full shadow-lg"
                        animate={hoveredGame === game.id ? {
                          scale: [1, 1.1, 1],
                          rotate: [0, 5, -5, 0]
                        } : {}}
                        transition={{ duration: 0.5, repeat: hoveredGame === game.id ? Infinity : 0 }}
                      >
                        {game.discount}% OFF
                      </motion.div>
                    </div>
                  )}

                  {/* Sparkle Effect on Hover */}
                  {hoveredGame === game.id && (
                    <>
                      {[...Array(12)].map((_, i) => (
                        <motion.div
                          key={`card-sparkle-${i}`}
                          className="absolute w-1.5 h-1.5 bg-yellow-300 rounded-full z-30"
                          initial={{
                            x: '50%',
                            y: '50%',
                            scale: 0
                          }}
                          animate={{
                            x: `${50 + Math.cos(i * Math.PI / 6) * 150}%`,
                            y: `${50 + Math.sin(i * Math.PI / 6) * 150}%`,
                            scale: [0, 1, 0],
                            opacity: [0, 1, 0]
                          }}
                          transition={{
                            duration: 1.2,
                            repeat: Infinity,
                            ease: "easeOut",
                            delay: i * 0.1
                          }}
                        />
                      ))}
                    </>
                  )}

                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 z-20 p-6 bg-gradient-to-t from-black/90 via-black/60 to-transparent">
                    {/* Available Badge */}
                    {game.available && (
                      <div className="mb-3">
                        <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-gradient-to-r from-green-400 to-emerald-500 text-white text-xs font-bold rounded-full shadow-lg">
                          <span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
                          Available
                        </span>
                      </div>
                    )}

                    {/* Game Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-yellow-300 transition-colors duration-300"
                      style={{ 
                        fontFamily: "'Cinzel', serif",
                        textShadow: '2px 2px 4px rgba(0,0,0,0.8)'
                      }}>
                      {game.name}
                    </h3>

                    {/* Decorative Bottom Border */}
                    <div className="h-1 w-0 group-hover:w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-pink-500 rounded-full transition-all duration-500"></div>
                  </div>

                  {/* Rangoli Corner Decoration */}
                  <div className="absolute top-0 right-0 w-20 h-20 pointer-events-none z-20">
                    <div className="absolute top-2 right-2 w-12 h-12 border-4 border-yellow-400/40 rounded-full"></div>
                    <div className="absolute top-4 right-4 w-8 h-8 border-4 border-orange-400/40 rounded-full"></div>
                    <div className="absolute top-6 right-6 w-4 h-4 bg-pink-400/60 rounded-full"></div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* No Results Message */}
        {filteredGames.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🎮</div>
            <h3 className="text-2xl font-bold text-yellow-300 mb-2">No games found</h3>
            <p className="text-yellow-200">Try searching with different keywords</p>
          </motion.div>
        )}

        {/* Festive Footer Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex flex-col items-center gap-4 px-8 py-6 bg-gradient-to-r from-purple-900/80 to-pink-900/80 backdrop-blur-xl border-2 border-yellow-400/50 rounded-2xl shadow-2xl">
            <div className="flex items-center gap-3">
              <motion.span 
                className="text-4xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, 15, -15, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 2
                }}
              >🎆</motion.span>
              <p className="text-yellow-200 font-semibold text-xl" style={{ fontFamily: "'Poppins', sans-serif" }}>
                Special Diwali Discount: <span className="text-yellow-300 font-bold">20% OFF</span> on All Game Servers!
              </p>
              <motion.span 
                className="text-4xl"
                animate={{ 
                  scale: [1, 1.3, 1],
                  rotate: [0, -15, 15, 0]
                }}
                transition={{ 
                  duration: 2, 
                  repeat: Infinity,
                  repeatDelay: 2,
                  delay: 0.5
                }}
              >🎆</motion.span>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white font-bold rounded-full shadow-lg hover:shadow-yellow-400/30 transition-all"
            >
              Claim Your Diwali Offer Now
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Floating Fireworks (Bottom Corners) */}
      <div className="fixed bottom-10 left-10 pointer-events-none z-50">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="text-6xl"
        >
          🎇
        </motion.div>
      </div>
      
      <div className="fixed bottom-10 right-10 pointer-events-none z-50">
        <motion.div
          animate={{
            scale: [1, 1.5, 1],
            opacity: [0.5, 1, 0.5]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="text-6xl"
        >
          🎇
        </motion.div>
      </div>

      {/* Add Google Fonts */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Cinzel:wght@400;700&family=Poppins:wght@400;600;700&display=swap');
      `}</style>
    </div>
    </>
  );
};

export default GameHosting;