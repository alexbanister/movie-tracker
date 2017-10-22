import * as actions from './HeaderAction';

describe('CardCatalog', ()=>{

  it('logOutAction should return an action', () => {
    const expected = {
      type: 'LOG_OUT'
    };

    expect(actions.logOutAction()).toEqual(expected);
  });
});
