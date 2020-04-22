import{Action} from 'redux';


export interface IFIlterCollapseAction extends Action{
    payload:{ collapsed: boolean, index: number};
}