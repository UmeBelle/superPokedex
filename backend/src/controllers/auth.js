const db = require("../../db/index");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { TOKEN_SECRET } = require("../middleware/jw-validate");

const registro = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.query("select * from users where username = $1", [username]);

    if (user.rowCount > 0) {
      return res.status(400).json({
        data: [],
        message: "Ya existe un usuario con ese correo",
        success: false,
      });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHashed = await bcrypt.hash(password, salt);
    const newUser = {
      username,
      password: passwordHashed,
    };

    await db.query(
      "insert into users(username, password) values($1, $2, $3)",
      [username, passwordHashed]
    );
    return res
      .status(200)
      .json({ data: [newUser], message: "Usuario creado", success: true });
  } catch (error) { }
};
const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await db.query("select * from users where username = $1", [username]);
    if (user.rowCount === 0) {
      return res.status(400).json({
        data: [],
        message: "Este usuario no esta registrado.",
        success: false,
      });
    }

    // const passwordValidada = await bcrypt.compare(
    //   password,
    //   user.rows[0].password
    // );
    const passwordValidada = password ===
      user.rows[0].password;
    if (!passwordValidada) {
      return res
        .status(400)
        .json({ success: false, message: "Contraseña invalida" });
    }
    const token = jwt.sign(
      { username: username },
      TOKEN_SECRET
    );
    return res
      .status(200)
      .json({
        success: true,
        message: "Se inicio sesion correctamente.",
        token
      });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { registro, login };