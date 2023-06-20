
import posts from './foto1.jpg'


function BlockOfPosts() {
    const showText = () => {
        alert(`I am from Moscow`);
    }

    function showTextTwo() {
        alert(`I am from Paris`);
    }
    const showTextThree = () => {
        alert(`I am from London`);
    }
    function showTextFour() {
        alert(`I am from Japan`);
    }
    return (
    <div className="blockOfPosts">
        <img onClick={showText} src={posts} width='250px' alt="foto1" />
        <img onClick={showTextTwo} src={posts} width='250px' alt="foto1" />
        <img onClick={showTextThree} src={posts} width='250px' alt="foto1" />
        <img onClick={showTextFour}  src={posts} width='250px' alt="foto1" />
    </div>
    );
}



export default BlockOfPosts;