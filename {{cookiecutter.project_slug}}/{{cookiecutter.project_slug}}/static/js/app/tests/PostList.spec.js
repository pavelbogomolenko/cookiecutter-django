import { expect } from 'chai';
import sinon from 'sinon';
import { shallow } from '@vue/test-utils';

import api from '../components/RestAPI';
import PostList from '../components/PostList';

describe('Test PostList Component', () => {
    const getAllPostsResult = [{id: '1'}];
    let apiMock;
    let postListWrapper;

    before(() => {
        apiMock = sinon.stub(api, 'getAllPosts');
        apiMock.returns(new Promise(resolve => {
            resolve(getAllPostsResult);
        }));
    });

    beforeEach(() => {
        postListWrapper = shallow(PostList);
    });

    it('should fetch posts on page load', (done) => {
        postListWrapper.vm.$nextTick(() => {
            expect(postListWrapper.vm.posts).to.be.deep.equal(getAllPostsResult);
            done();
        });
    });

    it('should have msg set', () => {
        expect(postListWrapper.vm.msg).to.be.not.null;
    });
});
