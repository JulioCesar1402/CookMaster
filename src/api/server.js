const app = require('./app');
const userRoutes = require('../routes/userRoutes');
const loginRoutes = require('../routes/loginRoutes');
const recipesRoutes = require('../routes/recipesRoutes');

const PORT = 3000;

app.use('/users', userRoutes);
app.use('/login', loginRoutes);
app.use('/recipes', recipesRoutes);

app.listen(PORT, () => console.log(`conectado na porta ${PORT}`));
