import Product from '../../models/homePageScoreBoard';
export const SET_SCOREBOARD = 'SET_SCOREBOARD';

export const fetchProducts = () => {
    return async dispatch => {
        // any async code you want!
        const response = await fetch(
            'https://www.derspektifhibrit.com/api/v1/hibrit/mobile/get_score_board'
        );

        const resData = await response.json();
        const loadedScoreBoard = [];

        for (const key in resData) {
            loadedScoreBoard.push(
                new Product(
                    key,
                    'u1',
                    resData[key].title,
                    resData[key].imageUrl,
                    resData[key].description,
                    resData[key].price
                )
            );
        }

        dispatch({ type: SET_SCOREBOARD, scoreBoard: loadedScoreBoard });
    };
};