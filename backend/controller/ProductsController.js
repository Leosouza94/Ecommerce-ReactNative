const Product = require("../model/Products")


module.exports = {
    // Função que cria um novo produto
    createProduct: async (req, res) => {
      // Cria uma nova instância do modelo Product com os dados recebidos no corpo da requisição
      const newProduct = new Product(req.body);
      
      try {
        // Salva o novo produto no banco de dados
        await newProduct.save();
        
        // Retorna 'Product created succesfully' com status 200
        res.status(200).json("Product created successfully");
      } catch (error) {
        // Em caso de erro, retorna um status 500 e 'Failed to create the product'
        res.status(500).json("Failed to create the product");
      }
    },
  
    // Função para obter todos os produtos do banco de dados
    getAllProduct: async (req, res) => {
      try {
        // Busca todos os produtos no banco de dados e ordena pelo campo 'createdAt' em ordem decrescente (-1)
        const products = await Product.find().sort({ createdAt: -1 });
        
        // Retorna os produtos encontrados com status 200
        res.status(200).json(products);
      } catch (error) {
        // Em caso de erro, retorna um status 500 e 'Failed to create the product'
        res.status(500).json("Failed to get the products");
      }
    },

    // Função para obter todos os produtos do banco de dados
    getProduct: async (req, res) => {
        try {
          // Busca todos os produtos no banco de dados e ordena pelo campo 'createdAt' em ordem decrescente (-1)
          const product = await Product.findById(req.params.id)
          
          // Retorna os produtos encontrados com status 200
          res.status(200).json(product);
        } catch (error) {
          // Em caso de erro, retorna um status 500 e 'Failed to create the product'
          res.status(500).json("Failed to get the product");
        }
      },

    searchProduct: async (req, res) => {
        try {
            const result = await Product.aggregate(
                [
                    {
                      $search: {
                        index: "furniture",
                        text: {
                          query: req.params.key,
                          path: {
                            wildcard: "*"
                          }
                        }
                      }
                    }
                  ]
            )
            res.status(200).json(result);
        } catch (error) {
            res.status(500).json("Failed to get the product");
        }
    }
  };
  