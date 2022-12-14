const Form = () => {
  return (
    <div>
      <div id="login-form-wrap">
        <h2>Add Device</h2>

        <button className="plusButton">+</button> <br /><br />
        Pease select a device to add
        <br />
        <br />

        <img src={"https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcSK43eGisuyVrl4Ikp3ZvdgpqgYvl46_NR0J26M_IYWL734-S8a"} />

        <form id="login-form">
          <br />
          <br />
          <span style={{ "float": "left" }}>Device name</span>
          <input type="text" id="" name="" placeholder="DSLR camera" required /><i class="validation"><span></span><span></span></i>
          <br />
          <br />

          <span style={{ "float": "left" }}>Device Video</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>

          <select name="" id="" placeholder="Shh">
            <option value="">USB HDMI Camera</option>
          </select>

          <br />
          <br />

          <span style={{ "float": "left" }}>Audio Device</span>
          <label class="switch">
            <input type="checkbox" />
            <span class="slider round"></span>
          </label>
          <select name="" id="" placeholder="Shh">
            <option value="">Logitech Microphone</option>
          </select>
          <div class="">
            <div class="w3-bar">
              <button class="btn-teal">Add Device</button>
              <button class="btn-white">Cancel</button>
            </div>
          </div>
        </form>
        <br />
        <br />
      </div>

    </div>

  )
}

export default Form;