import React from 'react';

function Footer() {
    return (
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p>&copy; 2023 Recipe Pro Builder</p>
                            </div>
                            <div className="col-md-6 text-md-right">
                                <a
                                    href="https://github.com/KevalPatel6/Recipe-Builder-Pro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <img src="github-badge.png" alt="GitHub" className="github-badge" />
                                </a>
                                <p className="mt-2">MIT License</p>
                            </div>
                        </div>
                    </div>
                </footer>
    )
}

export default Footer;