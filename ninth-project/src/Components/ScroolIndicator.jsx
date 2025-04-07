import React, { useEffect, useState } from 'react';

export default function ScrollIndicator({ url }) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [scrollPercentage, setScrollPercentage] = useState(0);

    // Function to handle scroll and calculate the scroll percentage
    function handleScrollPercentage() {
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        setScrollPercentage((howMuchScrolled / height) * 100);
    }

    // Function to fetch data from the provided URL
    async function fetchData(getUrl) {
        try {
            setLoading(true);
            const res = await fetch(getUrl);
            const data = await res.json();
            if (data && data.products && data.products.length > 0) {
                setData(data.products);
                setLoading(false);
            }
        } catch (error) {
            console.log(error);
            setErrorMessage(error.message);
        }
    }

    // Fetch data on URL change
    useEffect(() => {
        fetchData(url);
    }, [url]);

    // Add scroll event listener and cleanup
    useEffect(() => {
        window.addEventListener('scroll', handleScrollPercentage);

        // Cleanup the event listener when the component is unmounted
        return () => {
            window.removeEventListener('scroll', handleScrollPercentage);
        };
    }, []); // Empty dependency array to only run once on mount/unmount

    return (
        <div className="flex flex-col items-center justify-center min-h-screen">
            <div className="fixed top-0 left-0 w-full flex justify-center items-center bg-green-600 p-6">
                <h1 className="font-bold text-4xl text-white">Custom Scroll Indicator</h1>
            </div>
            <div className="fixed top-16 left-0 w-full flex justify-center">
                <input
                    type="range"
                    value={scrollPercentage}
                    min={0}
                    max={100}
                    readOnly
                    className="w-3/4 md:w-1/2"
                />
            </div>
            <div className="mt-20 text-center mt-24">
                {loading ? (
                    <p>Loading...</p>
                ) : errorMessage ? (
                    <p className="text-red-500">{errorMessage}</p>
                ) : data && data.length > 0 ? (
                    data.map((dataItem, index) => (
                        <p key={index} className="text-xl p-2">
                            {dataItem.title}
                        </p>
                    ))
                ) : (
                    <p>No data available</p>
                )}
            </div>
        </div>
    );
}
