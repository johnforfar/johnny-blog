{
  inputs = {
    xnode-manager.url = "github:Openmesh-Network/xnode-manager";
    johnny-blog-frontend.url = "github:johnforfar/johnny-blog?ref=main";
    nixpkgs.follows = "johnny-blog-frontend/nixpkgs";
  };

  outputs = inputs: {
    nixosConfigurations.container = inputs.nixpkgs.lib.nixosSystem {
      specialArgs = {
        inherit inputs;
      };
      modules = [
        inputs.xnode-manager.nixosModules.container
        {
          services.xnode-container.xnode-config = {
            host-platform = ./xnode-config/host-platform;
            state-version = ./xnode-config/state-version;
            hostname = ./xnode-config/hostname;
          };
        }
        inputs.johnny-blog-frontend.nixosModules.default
        {
          services.johnny-blog-miniapp.enable = true;
          services.johnny-blog-miniapp.url = "https://blog.johnny.openmesh.cloud";
        }
      ];
    };
  };
}
