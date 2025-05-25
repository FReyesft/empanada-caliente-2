import { useState, useEffect, useRef } from 'react';
import { Challenge, challenges } from '../utils/challenges';

export const useChallenge = () => {
    const [currentChallenge, setCurrentChallenge] = useState<Challenge | null>(null);
    const lastChallengeId = useRef<number | null>(null);

    const getRandomChallenge = () => {
        let newChallenge: Challenge;
        do {
            newChallenge = challenges[Math.floor(Math.random() * challenges.length)];
        } while (newChallenge.id === lastChallengeId.current && challenges.length > 1);

        lastChallengeId.current = newChallenge.id;
        setCurrentChallenge(newChallenge);
    };

    const acceptChallenge = () => {

    };

    const changeChallenge = () => {
        getRandomChallenge();
    };

    useEffect(() => {
        getRandomChallenge();
    }, []);

    return {
        currentChallenge,
        acceptChallenge,
        changeChallenge,
    };
};
