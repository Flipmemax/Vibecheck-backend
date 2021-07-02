require("dotenv").config();

module.exports = {
	development: {
		url: "postgres://vupwrpll:PXRrG9eApy0Q0TR4EtsEaSxLAK_CrSwK@hattie.db.elephantsql.com/vupwrpll",
		dialect: "postgres",
	},
	test: {
		username: "root",
		password: null,
		database: "database_test",
		host: "127.0.0.1",
		dialect: "mysql",
	},
	production: {
		url: "postgres://vupwrpll:PXRrG9eApy0Q0TR4EtsEaSxLAK_CrSwK@hattie.db.elephantsql.com/vupwrpll",

		dialectOptions: {
			ssl: {
				rejectUnauthorized: false,
			},
		},
	},
};
// console.log(process.env.DATABASE_URL);
