module.exports = (database,DataTypes)=>{
    database.define("Character", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        gender: {
            type: DataTypes.STRING,
        },
        status: {
            type: DataTypes.ENUM("Alive", "Dead", "Unknown"),
            defaultValue: "Alive"
        },
        origin: {
            type: DataTypes.STRING,
        },
        species: {
            type: DataTypes.STRING,
        },
    },
    {
        timestamps: false
    }
)
}