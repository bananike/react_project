import { useState, useEffect } from 'react';

export const useIntersectionObserver = ({ root, target, onIntersect, threshold = 1.0, rootMargin = '0px' }) => {
    useEffect(() => {
        if (!root) {
            return;
        }

        const observer = new IntersectionObserver(onIntersect, {
            root,
            rootMargin,
            threshold,
        });

        if (!target) {
            return;
        }

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        };
    }, [target, root, rootMargin, onIntersect, threshold]);
};

export const useWindowResize = () => {
    let [width, setWidth] = useState(window.innerWidth);

    // in this case useEffect will execute only once because
    // it does not have any dependencies.
    useEffect(() => {
        // timeoutId for debounce mechanism
        let timeoutId = null;
        const resizeListener = () => {
            // prevent execution of previous setTimeout
            clearTimeout(timeoutId);
            // change width from the state object after 150 milliseconds
            timeoutId = setTimeout(() => setWidth(window.innerWidth), 300);
        };
        // set resize listener
        window.addEventListener('resize', resizeListener);

        // clean up function
        return () => {
            // remove resize listener
            window.removeEventListener('resize', resizeListener);
        };
    }, []);

    return width;
};

export const useScroll = () => {
    const [state, setState] = useState(0);
    const onScroll = (e) => {
        setState(window.scrollY);
    };
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);
    return state;
};
