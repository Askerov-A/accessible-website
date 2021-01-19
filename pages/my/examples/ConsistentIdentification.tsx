import { useState } from 'react';

export default function ConsistentIdentification() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };

  return (
    <div>
      <div>
        <h5>Bad</h5>
        <img onClick={handleToggle} src="/backspace.png" alt="backspace icon to home" />
        {toggle && (
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quis ad nihil
            sapiente consequatur unde corporis nobis hic consectetur impedit doloribus
            exercitationem quam, ipsa in, animi laboriosam quos temporibus sed?
          </p>
        )}
      </div>

      <div>
        <h5>Good</h5>
        <a href="/" title="Back to home">
          <img src="/backspace.png" alt="backspace icon to home" />
        </a>
      </div>
    </div>
  );
}
