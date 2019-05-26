import PlayersList from './PlayersList';
import React from 'react';
import { shallow } from 'enzyme';
import Player from './Player';

it('renders without crashing', () => {
    shallow(<PlayersList players={[]} />);
});

it('renders correct number of players', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const playerComponent = shallow(<PlayersList players={players} />);
    const expectedPlayersNumber = playerComponent.find(Player).length;
    expect(expectedPlayersNumber).toEqual(2);
});

it('should call onScoreUpdate when a button is clicked', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnScoreUpdate = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onScoreUpdate={mockedOnScoreUpdate} />);
    const secondPlayer = playerComponent.find(Player).at(1);
    const onPlayerScoreChange = secondPlayer.prop('onPlayerScoreChange');
    onPlayerScoreChange(4);
    expect(mockedOnScoreUpdate).toBeCalledWith(1, 4);
});

it('should call onPlayerRemove when a button is clicked', () => {
    const players = [
        {
            name: 'Kunegunda',
            score: 5
        },
        {
            name: 'Antoś',
            score: 0
        }
    ]
    const mockedOnPlayerRemove = jest.fn();
    const playerComponent = shallow(<PlayersList players={players} onPlayerRemove={mockedOnPlayerRemove} />);
    const removedPlayer = playerComponent.find(Player).at(1);
    const onPlayerRemove = removedPlayer.prop('onPlayerRemove');
    onPlayerRemove();
    expect(mockedOnPlayerRemove).toBeCalled();
});

