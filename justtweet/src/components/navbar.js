import React from 'react';

const Navbarr = () => {
    return (
        <div class="Navbar">
            <nav class="navbar navbar-inverse navbar-left mt-2">
                <div class="container-fluid">

                    <div class="navbarLinks">

                        <div class="active links m-1"><a href="#">Home</a></div>
                        <div class="links m-1"><a href="#">moments</a></div>
                        <div class="links m-1"><a href="#">notifications</a></div>
                        <div class="links m-1"><a href="#">messages</a></div>

                    </div>


                    <form class="d-flex navbar-left" role="search">

                       
                            <input class=" searchTweet form-control" type="search" placeholder="Search Tweet" aria-label="Search" />

                            <button class="btn btn-primary tweetBtn" type="submit">Tweet</button>
            
                    </form>
                </div>
            </nav>
        </div>
    )
}

export default Navbarr;