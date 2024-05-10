using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using GroceryAPI.Models;
using Microsoft.AspNetCore.Mvc;

namespace GroceryAPI.Controllers
{
    [ApiController]
    [Route("product")]
    public class ProductController : ControllerBase
    {
        private readonly ApplicationDBContext _dbContext;
        public ProductController(ApplicationDBContext applicationDbContext){
        _dbContext=applicationDbContext;
        }
        
        [HttpGet]
        public IActionResult Getproducts(){
            return Ok(_dbContext._productsList);
        }
        [HttpGet("{productID}")]
        public IActionResult GetIndividualProduct(int productID)
        {
            var product=_dbContext._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            return Ok(product);
        }
        [HttpPost]
        public IActionResult AddProduct([FromBody] ProductDetails product)
        {
            _dbContext._productsList.Add(product);
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{productID}")]
        public IActionResult UpdateProduct(int productID,[FromBody] ProductDetails product)
        {
            var productOld=_dbContext._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(productOld==null)
            {
                return NotFound();
            }
            productOld.ProductID=product.ProductID;
            productOld.ProductName=product.ProductName;
            productOld.PricePerQuantity=product.PricePerQuantity;
            productOld.QuantityAvailable=product.QuantityAvailable;
            productOld.PurchaseDate=product.PurchaseDate;
            productOld.ExpiryDate=product.ExpiryDate;
            product.Image=product.Image;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpPut("{productID}/{count}")]
        public IActionResult UpdateCount(int productID,int count)
        {
            var product=_dbContext._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            product.QuantityAvailable-=count;
            _dbContext.SaveChanges();
            return Ok();
        }
        [HttpDelete("{productID}")]
        public IActionResult DeleteBook(int productID)
        {
        var product=_dbContext._productsList.FirstOrDefault(product=>product.ProductID==productID);
            if(product==null)
            {
                return NotFound();
            }
            _dbContext._productsList.Remove(product);
            _dbContext.SaveChanges();
            return Ok();
        }
        
    }
}