import React, { useState, useEffect } from 'react';
import { Typography, Box, useMediaQuery, useTheme } from '@mui/material';
import androidLogo from '../assets/android_logo.png';

const Home = () => {
    const petnav_fav = require('../assets/petnav_fav.png');
    const petnav_map = require('../assets/petnav_map.png');
    const petnav_modal = require('../assets/petnav_modal.png');
    const images = [
        petnav_modal,
        petnav_fav,
        petnav_map,
    ];

    const words = ['Toiletteur', 'Vétérinaire', 'Bar à chat', 'Association', 'Parc', 'Pension'];
    const [currentWordIndex, setCurrentWordIndex] = useState(0);
    const [opacity, setOpacity] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            setOpacity(0); // Start fade out
            setTimeout(() => {
                setCurrentWordIndex(prevIndex => (prevIndex + 1) % words.length);
                setOpacity(1); // Start fade in
            }, 500); // Halfway point of the interval
        }, 3000); // Change word every 3 seconds
        return () => clearInterval(interval);
    }, [words.length]);

    const [zIndexes, setZIndexes] = useState(images.map((_, index) => index));

    const handleMouseEnter = (index) => {
        setZIndexes((prevZIndexes) => {
            const newZIndexes = [...prevZIndexes];
            newZIndexes.splice(newZIndexes.indexOf(index), 1);
            newZIndexes.push(index);
            return newZIndexes;
        });
    };

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

    if (isSmallScreen) {
        return (
            <Box
                display="flex"
                bgcolor="#285c3f"
                color="white"
                maxWidth="100%"
                width="100%"
                height="100vh"
                padding={false}
                flexDirection="column"
                alignItems="center"
                justifyContent="center"
            >
                <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" backgroundColor="#fff" padding="20px" style={{ borderRadius: '15px', width: '90%', height: '90%' }}>
                    <Box marginTop="20px" display="flex" justifyContent="center" alignItems="center" width="100%">
                        <Typography variant="h5" fontFamily="'Comfortaa', cursive" color="#285c3f">
                            Je recherche un :
                        </Typography>
                        <Box position="relative" height="40px" overflow="hidden" marginLeft="10px" width="100%" maxWidth="250px">
                            <Box position="absolute" top={`-${currentWordIndex * 40}px`} style={{ opacity, transition: 'opacity 0.5s ease-in-out' }} width="100%" maxWidth="250px">
                                {words.map((word, index) => (
                                    <Typography key={index} variant="h5" fontFamily="'Comfortaa', cursive" style={{ height: '40px', lineHeight: '40px', color: '#536e55', fontWeight: 'bolder' }}>
                                        {word}
                                    </Typography>
                                ))}
                            </Box>
                        </Box>
                    </Box>
                    <Box display="flex" justifyContent="center" alignItems="center" marginTop="20px">
                        {images.map((src, index) => (
                            <img
                                key={index}
                                src={src}
                                alt={`Mockup ${index + 1}`}
                                style={{
                                    width: '150px',
                                    height: 'auto',
                                    marginLeft: `${index * -30}px`, // Slight horizontal overlap for the stack effect
                                    borderRadius: '15px',
                                    transform: `rotate(${index * -5}deg)`, // Small rotation for the stack effect
                                    transition: 'transform 0.2s, z-index 0.2s',
                                    zIndex: zIndexes.indexOf(index),
                                    cursor: 'pointer'
                                }}
                                onMouseEnter={() => handleMouseEnter(index)}
                            />
                        ))}
                    </Box>
                </Box>
                <Box padding="20px" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
                    <Typography variant="h1" fontFamily="'Comfortaa', cursive" gutterBottom>
                        PetNav
                    </Typography>
                    <Typography variant="body1" fontFamily="'Work Sans', sans-serif" fontSize="1.2em" lineHeight="1.5" textAlign="center">
                        PetNav est votre compagnon idéal pour tout ce qui concerne vos animaux de compagnie.
                        Que vous cherchiez un vétérinaire, un parc pour animaux, ou une association, PetNav
                        vous fournit toutes les informations nécessaires. L'application est gratuite.
                    </Typography>
                    <Box display="flex" alignItems="center" justifyContent="center" marginTop="20px">
                        <img src={androidLogo} alt="Android Logo" style={{ height: '40px', marginRight: '10px' }} />
                        <Typography variant="h6" fontFamily="'Comfortaa', cursive">
                            Available on Android
                        </Typography>
                    </Box>
                </Box>
            </Box>
        );
    }

    return (
        <Box
            display="flex"
            bgcolor="#285c3f"
            color="white"
            maxWidth="100%"
            width="100%"
            height="100vh"
            padding={false}
        >
            <Box display="flex" flex={1} position="relative" flexDirection="column" height="100vh" backgroundColor="#fff" margin={0} style={{ borderRadius: '0px 15px 0px 0px', alignItems: 'center', justifyContent: 'center' }}>
                <Box marginTop="50px" display="flex" justifyContent="flex-end" alignItems="center" width="100%">
                    <Typography variant="h5" fontFamily="'Comfortaa', cursive" color="#285c3f">
                        Je recherche un :
                    </Typography>
                    <Box position="relative" height="40px" overflow="hidden" marginLeft="10px" width="100%" maxWidth="450px">
                        <Box position="absolute" top={`-${currentWordIndex * 40}px`} style={{ opacity, transition: 'opacity 0.5s ease-in-out' }} width="100%" maxWidth="450px">
                            {words.map((word, index) => (
                                <Typography key={index} variant="h5" fontFamily="'Comfortaa', cursive" style={{ height: '40px', lineHeight: '40px', color: '#536e55', fontWeight: 'bolder' }}>
                                    {word}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                </Box>
                <Box display="flex" justifyContent="center" alignItems="center" height="60vh">
                    {images.map((src, index) => (
                        <img
                            key={index}
                            src={src}
                            alt={`Mockup ${index + 1}`}
                            style={{
                                width: '250px',
                                height: 'auto',
                                marginLeft: `${index * -60}px`, // Slight horizontal overlap for the stack effect
                                borderRadius: '15px',
                                transform: `rotate(${index * -5}deg)`, // Small rotation for the stack effect
                                transition: 'transform 0.2s, z-index 0.2s',
                                zIndex: zIndexes.indexOf(index),
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => handleMouseEnter(index)}
                        />
                    ))}
                </Box>
            </Box>
            <Box flex={1} padding="20px" display="flex" flexDirection="column" justifyContent="center">
                <Typography variant="h1" fontFamily="'Comfortaa', cursive" gutterBottom>
                    PetNav
                </Typography>
                <Typography variant="body1" fontFamily="'Work Sans', sans-serif" fontSize="1.2em" lineHeight="1.5">
                    PetNav est votre compagnon idéal pour tout ce qui concerne vos animaux de compagnie.
                    Que vous cherchiez un vétérinaire, un parc pour animaux, ou une association, PetNav
                    vous fournit toutes les informations nécessaires. L'application est gratuite.
                </Typography>
                <Box display="flex" alignItems="center" justifyContent="flex-end" marginTop="20px">
                    <img src={androidLogo} alt="Android Logo" style={{ height: '40px', marginRight: '10px' }} />
                    <Typography variant="h6" fontFamily="'Comfortaa', cursive">
                        Available on Android
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Home;
