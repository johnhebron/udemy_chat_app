let expect = require('expect');

let {generateMessage} = require('./message');

describe("generateMessage", () => {
  it("Should generate the correct message object", () =>{
    let from = "Jen";
    let text = "Some Message";
    let message = generateMessage(from, text);

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({
      from,
      text
    });
  });
});
