import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { Footer } from './Footer';
import linkedinIcon from '../../../assets/icons/linkedin-icon.svg';
import githubIcon from '../../../assets/icons/github-icon.svg';

describe('<Footer />', () => {
  test('renders component', () => {
    const component = render(
      <Footer
        githubIcon={githubIcon}
        linkedinIcon={linkedinIcon}
        githubLink='gitHub.com'
        linkedinLink='linkedin.com'
        githubText='@testGitHub'
        linkedinText='@testLinkedin'
      />
    );
    expect(component.getByAltText('github icon').closest('img')).toHaveAttribute('src', githubIcon);
    expect(component.getByAltText('linkedin icon').closest('img')).toHaveAttribute('src', linkedinIcon);
    expect(component.getByAltText('github icon').closest('a')).toHaveAttribute('href', 'gitHub.com');
    expect(component.getByAltText('linkedin icon').closest('a')).toHaveAttribute('href', 'linkedin.com');
    component.getByText('@testGitHub');
    component.getByText('@testLinkedin');
  });
});
