import React from 'react';

const Rightpanel = () => {
    return (
        <div class="people">
            <div>
                <b class="fs-4 me-2">Who to follow</b>
                <button class="refresh">Refresh</button>
                <button class="view">view All</button>
            </div>

            <div class="profiles d-flex border-bottom">
                <img src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" class="avatar" />
                <div class="ProfileDetails m-3">
                    <div> <b>Bjarne </b> @stroustrap  </div>

                    <button class="btn btn-outline-primary"> Follow</button>
                </div>
            </div>



            <div class="profiles d-flex border-bottom">
                <img src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" class="avatar" />
                <div class="ProfileDetails m-3 ">
                    <div> <b>Bjarne </b> @stroustrap  </div>

                    <button class="btn btn-outline-primary"> Follow</button>
                </div>
            </div>


            <div class="profiles d-flex border-bottom">
                <img src="https://th.bing.com/th/id/OIP.Z306v3XdxhOaxBFGfHku7wHaHw?pid=ImgDet&rs=1" class="avatar" />
                <div class="ProfileDetails m-3">
                    <div> <b>Bjarne </b> @stroustrap  </div>

                    <button class="btn btn-outline-primary"> Follow</button>
                </div>
            </div>




        </div>
    )
}

export default Rightpanel;