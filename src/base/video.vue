<template>
    <div style="position:relative">
        <div class="head-content-middle flex-col">
            <div class="text-head">Up</div>
            <div class="line"></div>
            <div class="text-foot auto-typing">
                最怕一生碌碌无为，还说平凡难能可贵
                <!-- We've been traveling,
        waiting for someone to be the partner of our journey, 
                to accompany us through a memory that no one else can replace-->
            </div>
            <br />
        </div>
        <div class="main">
            <video
                autoplay="autoplay"
                muted="muted"
                volume="0"
                loop="loop"
                class="video"
                poster="https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cHM6Ly81ZDJkMjVlNWJjMjMxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvYTVkNWRjNWFjZjYzYmFmYTE3NzM2YzUwNTZiMmMyMWZwcmV2aWV3X2ltYWdlLTkwLndlYnA_p_p100_p_3D.webp"
            >
                <source
                    type="video/webm"
                    src="https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cHM6Ly81ZDJkMjVlNWJjMjMxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvYTVkNWRjNWFjZjYzYmFmYTE3NzM2YzUwNTZiMmMyMWYud2VibQ_p_p100_p_3D_p_p100_p_3D.webm"
                />
                <source
                    type="video/mp4"
                    src="https://ccdn.goodq.top/caches/ca7f25a345c62638cfe4fe48163ebb7e/aHR0cHM6Ly81ZDJkMjVlNWJjMjMxLnQ3My5xaWZlaXllLmNvbS9xZnktY29udGVudC91cGxvYWRzLzIwMTkvMDcvYTVkNWRjNWFjZjYzYmFmYTE3NzM2YzUwNTZiMmMyMWYubXA0.mp4"
                />
            </video>
        </div>
    </div>
</template>
<script>
export default {

}
</script>
<style lang="scss" scoped>
.main {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100vh;
    position: relative;
    .video {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center center;
    }
}
.flex-col {
    display: flex;
    flex-direction: column;
}
.flex-row {
    display: flex;
    flex-direction: row;
}

// @media screen and (min-width: 1000px) {
.head-content-middle {
    line-height: 1.5rem;
    z-index: 2;
    position: absolute;
    width: 100%;
    height: 100%;
    .text-head {
        margin-top: 20%;
        font-size: 7rem;
        font-weight: 500;
        color: rgb(255, 255, 255);
    }
    .line {
        border: 4px solid #ffffff;
        margin: 0 20%;
    }
    .text-foot {
        // width: auto;
        height: 3rem;
        margin: 0 auto;
        margin-top: 5rem;
        font-size: 2.4rem;
        line-height: 3rem;
        font-weight: 500;
        color: rgb(255, 255, 255);
    }

    .auto-typing {
        // width: auto;
        color: #fff;
        overflow: hidden;
        border-right: 1px solid transparent;
        width: 40.8rem;
        white-space: nowrap;
        animation: typing 5s steps(17) 0s backwards, caret 500ms steps(1) 0s 10 forwards;
    }

    @keyframes typing {
        from {
            width: 0;
        }
    }
    @keyframes caret {
        50% {
            border-right-color: currentColor;
        }
    }
}
// }

@media screen and (max-width: 600px) {
    .head-content-middle {
        line-height: 1.5rem;
        z-index: 2;
        position: absolute;
        width: 100%;
        height: 100%;
        .text-head {
            margin-top: 60%;
            font-size: 5rem;
            font-weight: 300;
            color: #fff;
        }
        .line {
            border: 1px solid #ffffff;
            margin: 0 10%;
        }
        .text-foot {
            width: 100%;
            margin: 0 auto;
            margin-top: 3rem;
            font-size: 1.2rem;
            font-weight: 300;
            color: rgb(255, 255, 255);
        }
    }
}
</style>