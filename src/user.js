import React from "react";

const Users = ({ author, quote, cl }) => {
  // console.log({ author }.author.length);
  return (
    <div>
      <div
        style={{ width: "1200px", height: "300px", color: "black", background: "rgb(227,218,201)" }}
        class=" ui raised very padded text container segment ui attached segment"
      >
        <div class="ui ">
          <div class="card">
            <div class="content">
              <div style={{ background: "rgb(255,235,205)" }} class="ui segment">
                <h1 class="header">{quote}</h1>
              </div>
              <div style={{ marginTop: "50px" }} class="description">
                {!Boolean({ author }.author) ? <p>- unknown </p> : <p>- {author}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div onClick={cl} style={{ margin: " 0 370px" }} class=" ui bottom attached button" tabindex="20">
        next quote
      </div>
    </div>

    // <div>
    //   {!Boolean({ author }.author) ? <p>U N K N O W N </p> : <p>{author}</p>} <br></br>
    //   <p>{quote}</p>
    //   <button onClick={cl}>next</button>
    // </div>
  );
};
export default Users;
