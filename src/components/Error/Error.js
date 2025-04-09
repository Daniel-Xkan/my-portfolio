import React from 'react';

const Error = () => {
    return (
        <div style={{ textAlign: 'center', marginTop: '20%' }}>
            <h1>This portfolio is outdated</h1>
            <p>
                Redirecting to new portfolio... If you are not redirected, click{' '}
                <a href="https://daniel-xkan.github.io/my_portfolio/">here</a>.
            </p>
            <script>
                {`setTimeout(() => {
                    window.location.href = "https://daniel-xkan.github.io/my_portfolio/";
                }, 3000);`}
            </script>
        </div>
    );
};

export default Error;