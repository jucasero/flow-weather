import { describe, expect, it } from "bun:test";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/layout";

describe("Footer Component", () => {
    const props = {
        githubIcon: "github.svg",
        linkedinIcon: "linkedin.svg",
        githubLink: "https://github.com/user",
        linkedinLink: "https://linkedin.com/in/user",
        githubText: "@user",
        linkedinText: "@user",
    };

	it("should render links with correct hrefs", () => {
		render(<Footer {...props} />);
        
        const links = screen.getAllByRole("link");
        expect(links).toHaveLength(2);
        
        const githubLink = links.find(link => link.getAttribute("href") === props.githubLink);
        const linkedinLink = links.find(link => link.getAttribute("href") === props.linkedinLink);
        
        expect(githubLink).toBeTruthy();
        expect(linkedinLink).toBeTruthy();
	});

    it("should render text correctly", () => {
        render(<Footer {...props} />);
        const texts = screen.getAllByText(props.githubText);
        // Assuming unique text or handled correctly. If both texts are same, length is 2.
        // In the props I used same text, so expect length >= 1.
        expect(texts.length).toBeGreaterThan(0);
    });

    it("should render images with correct src", () => {
         render(<Footer {...props} />);
         const images = screen.getAllByRole("img");
         expect(images).toHaveLength(2);
         
         const githubImg = images.find(img => img.getAttribute("src") === props.githubIcon);
         const linkedinImg = images.find(img => img.getAttribute("src") === props.linkedinIcon);
         
         expect(githubImg).toBeTruthy();
         expect(linkedinImg).toBeTruthy();
    });
});
