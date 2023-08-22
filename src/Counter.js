import {useState} from 'react';
function Counter() {
    // let like = 10;
    const [like, setLike] = useState(1);
    const [dislike, setDisLike] = useState(1);
    return (
      <>
        {/* onClick => camelCase */}
        <button
          onClick={() => {
            setLike(like + 1);
            console.log(like);
          }}
        >
          like{like}
        </button>
        <button
          onClick={() => {
            setDisLike(dislike + 1);
            console.log(dislike);
          }}
        >
          dislike{dislike}
        </button>
      </>
    );
  }
  export default Counter;