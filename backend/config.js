var config = {
	ips: {
		bms: 'localhost:3000',
		file: 'localhost:3000',
		db: '118.36.36.112',
		redis: 'localhost',
		push: 'localhost'
	},
	db: {
		type: 'mysql',
		port: 3306,
		name: 'lifey',
		user: 'lifey',
		password: 'lifey',
		connectionLimit: 100
	}
};

module.exports = config;