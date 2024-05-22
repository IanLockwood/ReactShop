import renderer from 'react-test-renderer';
import { MenuPage } from "./MenuPage";
import { menuItemsList } from "./menuItemsList";

it('changes the class when hovered', () => {
  const component = renderer.create(
    <MenuPage />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
