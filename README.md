# Portfolio V3

An Astro-based portfolio website with a template system for managing projects.

## 
Inside of your Astro project, you'll see the following folders and files:

```text
/
 public/
 favicon.svg   
 src
 assets   
 components   
 Project.tsx      # Project card component      
 ...      
 content   
 config.ts         # Content collections configuration      
 projects/         # Project data (JSON files)      
 layouts   
 Layout.astro      
 pages   
 index.astro       
 projects.astro    # Projects page       
 package.json
```

## 
This site uses Astro's Content Collections to manage projects. To add a new project:

1. Create a new JSON file in `src/content/projects/`
2. Follow this structure:

```json
{
  "title": "Project Name",
  "description": "Project description",
  "image": "/path/to/image.jpg",
  "url": "https://project-url.com",
  "github": "https://github.com/username/repo",
  "tags": ["Tag1", "Tag2"],
  "featured": false,
  "order": 1
}
```

Fields:
- `title` (required): Project name
- `description` (required): Brief description
- `image` (required): Path to project image
- `url` (optional): Live project URL
- `github` (optional): GitHub repository URL
- `tags` (optional): Array of technology tags
- `featured` (optional): Highlight as featured project
- `order` (optional): Display order (lower numbers first)

## 
All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
| `pnpm build`           | Build your production site to `./dist/`          |
| `pnpm preview`         | Preview your build locally, before deploying     |
| `pnpm astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `pnpm astro -- --help` | Get help using the Astro CLI                     |

## 
Feel free to check [our documentation](https://docs.astro.build) or jump into our [Discord server](https://astro.build/chat).
