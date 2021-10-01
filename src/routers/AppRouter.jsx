import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { MyNav } from '../components/ui/MyNav';
import { Home } from '../pages/Home';
import { getPokemonInfo, getPokemons } from '../redux/actions/pokemons';

const URL = 'https://pokeapi.co/api/v2/pokemon?limit=12&offset=0';

export const AppRouter = () => {
    const dispatch = useDispatch();

    const { store, loading, storeInfo } = useSelector(
        (state) => state.pokemons
    );

    useEffect(() => {
        dispatch(getPokemons(URL));
    }, [dispatch]);

    useEffect(() => {
        if ((store.length !== 0) & (storeInfo.length === 0)) {
            for (let index = 0; index < store.length; index++) {
                dispatch(getPokemonInfo(store[index].url));
            }
        }
    }, [store, dispatch, storeInfo.length]);

    if (loading & (storeInfo.length === 0)) {
        return <h1>Cargando...</h1>;
    }

    return (
        <Router>
            <MyNav>
                <Switch>
                    <Route exact path="/" component={Home} />

                    <Redirect to="/" />
                </Switch>
            </MyNav>
        </Router>
    );
};
