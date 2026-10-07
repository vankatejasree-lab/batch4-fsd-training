import panda from '../panda.jpg';

function LikesDislikes() {
    return (
        <div>
            <h1>Likes and Dislikes</h1>
            <img src={panda} alt="panda" width="300" height="200" />

            <p>Likes: 0</p>
            <p>Dislikes: 0</p>
        </div>
    );
}

export default LikesDislikes;