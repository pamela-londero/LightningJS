import { Lightning, Router, Utils } from "@lightningjs/sdk";
import { Box } from "../components/Box"


export class Home extends Lightning.Component {
    static _template() {
        return {
            Background: {
                rect: true,
                w: 1920,
                h: 1080,
                color: 0xFF90CEA1,
            },
            Title: {
                x: 960,
                y: 150,
                mount: 0.5,
                text: {
                    text: "Bienvenidos",
                    fontSize: 80,
                },
            },
            Logo: {
                src: Utils.asset("images/movie-logo.png"),
                x: 120,
                y: 120,
                flex: {},
                mount: 0.5,
                padding: 20,
            },
            NavIndicator: {
                x: 600,
                y: 340,
                flex: {},
                mount: 0.5,
                Label: {
                    text: {
                        text: "Movies",
                        fontSize: 40,
                    },
                },
                Arrow: {
                    src: Utils.asset("images/arrow.png"),
                    rotation: Math.PI * 0.5,
                    w: 50,
                    h: 50,
                    padding: 20,
                },
            },
            Container:{
                rect: true,
                x: 400,
                y: 400,
                w: 1000,
                h: 600,
                color: 0xff808080,
                flex: {
                  direction: 'column',
                  padding: 20,
                  wrap: true,
                  justifyContent: 'space-evenly'
                },
                Box1: {
                  type: Box,
                  shade: 0xff809876
                },
                Box2: {
                  type: Box,
                  shade: 0xff809854
                },
                Box3: {
                  type: Box,
                  shade: 0xff809863
                },
                Box4: {
                  type: Box,
                  shade: 0xff808907
                }
            },
        };
    }

    pageTransition() {
        return 'left'
        //fade
        //rigth
        //crossFade
    }

    _handleRight() {
        Router.navigate('movies', {message: 'testing route params'})
    }

}