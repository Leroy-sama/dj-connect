import { defineStore } from "pinia";

export const useDjStore = defineStore("djStore", {
	state: () => ({
		djs: [
			{
				id: 1,
				name: "Dj Hannah",
				description:
					"Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
				image: "https://i.pinimg.com/236x/d9/c5/25/d9c525c3995ff1f32e5c491fb422ad0b.jpg",
				location: "Chicago",
			},
			{
				id: 2,
				name: "Dj Makena",
				description: "Vestibulum id ligula porta felis euismod semper.",
				image: "https://i.pinimg.com/236x/cf/ea/c1/cfeac1c130fe19c1488dab7623004768.jpg",
				location: "Los Santos",
			},
			{
				id: 3,
				name: "Dj Wilkinson",
				description:
					"Nunc id neque semper, tristique velit eget, fermentum metus.",
				image: "https://i.pinimg.com/564x/2f/2c/72/2f2c7298507bf1a34954416dad7ac227.jpg",
				location: "New York City",
			},
			{
				id: 4,
				name: "Dj Hector",
				description: "Donec at arcu id urna scelerisque consectetur.",
				image: "https://i.pinimg.com/564x/28/97/34/289734e5d4eab517c59f46990e061116.jpg",
				location: "Los Angeles",
			},
			{
				id: 5,
				name: "Dj Xboy",
				description:
					"Cras suscipit nunc id velit condimentum, vel tristique turpis pulvinar.",
				image: "https://i.pinimg.com/564x/44/30/df/4430df4c70188ec0c856c05b1d490f55.jpg",
				location: "Compton",
			},
			{
				id: 6,
				name: "Dj Franky",
				description: "Ut vitae neque in enim tincidunt scelerisque.",
				image: "https://i.pinimg.com/564x/2f/9a/70/2f9a70e309930ea5ad93d15a595d09e4.jpg",
				location: "Bed Stuy",
			},
			{
				id: 7,
				name: "Dj Hertz",
				description:
					"Nullam pulvinar velit et velit pellentesque, id consectetur massa mattis.",
				image: "https://i.pinimg.com/564x/0c/c2/16/0cc216b484d597b98370d4bc7a817958.jpg",
				location: "Boston",
			},
			{
				id: 8,
				name: "Dj Cowgirl",
				description: "Mauris vel ex id sem tempus fermentum.",
				image: "https://i.pinimg.com/564x/0e/79/32/0e7932e8f0ba79a26f1a93475de6642a.jpg",
				location: "Austin",
			},
		],
	}),
});
