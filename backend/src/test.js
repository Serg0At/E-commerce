// import mongoose from "mongoose";
const mongoose = require('mongoose') 

// Подключение к локальной или облачной базе MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('✅ Подключено к MongoDB'))
.catch(err => console.error('❌ Ошибка подключения:', err));


const userSchema = new mongoose.Schema({
  name: { type: String, required: true },  // имя (обязательное)
  age: { type: Number, min: 0 },            // возраст (не может быть отрицательным)
  email: { type: String },    // email (уникальный)
  createdAt: { type: Date, default: Date.now } // дата создания (по умолчанию — сейчас)
});


const User = mongoose.model('User', userSchema);

async function createUser() {
  const user = new User({ name: 'Karen', age: 25, email: 'sdfdsewen@example.com' });
  await user.save();
  console.log('✅ Пользователь создан:', user);
}

async function getUsers() {
  const users = await User.find({ age: { $gte: 18 } });
  console.log('📋 Найдено пользователей:', users);
}


async function updateUser() {
  const updated = await User.findOneAndUpdate(
    { email: 'karen@example.com' },
    { age: 26 },
    { new: true }
  );
  console.log('♻ Обновлено:', updated);
}


async function deleteUser() {
  const deleted = await User.deleteOne({ email: 'sdfdsewen@example.com' });
  console.log('🗑 Удалено:', deleted);
}




(async () => {
//   await createUser();
//   await getUsers();
//   await updateUser();
  await deleteUser();
  mongoose.connection.close();
})();
