module.exports = (database,DataTypes)=>{
    database.define("Episode", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            unique: true,
            allowNull: false,
        },
        
    },
    {
        timestamps: false
    }
)
}