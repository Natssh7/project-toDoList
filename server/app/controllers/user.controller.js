const db = require('../models')
const userModel = require('../models/user.model')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const User = db.users
const https = require('http')
const { Console } = require('console')

exports.findAll = (req, res) => {
    User.findAll()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: 'Could not find the users'
        })
      })
  }
  
  exports.findOne = (req, res) => {
    const id = req.params.id
    User.findByPk(id)
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        res.status(500).send({
          message: 'Could not find the user'
        })
      })
  }
  
  exports.create = async(req, res) => {
    console.log(req.body)
    if(!req.body.fullname || !req.body.email || !req.body.password) {
      res.status(400).send({
        message: "User must have name, email and password!"
      })
      return;
    }
    const salt = await bcrypt.genSalt(10)
    const hashPassword  = await bcrypt.hash(req.body.password, salt)
    await User.create({
      fullname:  req.body.fullname,
      email: req.body.email,
      password: hashPassword
    })
      .then(data => {
        res.send(data)
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not insert the user!"
      })
    })
  }
  
  exports.auth = (req, res) => {
    // Validate request body
    if (!req.body.email || !req.body.password) {
      res.status(400).send({
        message: 'Email and password are required!'
      })
      return;
    }
  
    // Find user by email
    User.findOne({ where: { email: req.body.email } })
      .then(user => {
        if (!user) {
          res.status(404).send({
            message: 'User not found!'
          })
          return;
        }
  
        // Compare passwords
        if (!bcrypt.compareSync(req.body.password, user.password)) {
          res.status(401).send({
            message: 'Invalid password!'
          })
          return;
        }
  
        // Generate JWT token
        const token = jwt.sign({ id: user.id }, 'secret', { expiresIn: 86400 }) // expires in 24 hours
  
        // Send token as cookie
        res.cookie('jwt', token, { httpOnly: true })
  
        // Send user data without password
        const { password, ...userData } = user.toJSON()
  
        res.send({
          user: userData,
          token: token
        })
      })
      .catch(err => {
        res.status(500).send({
          message: 'Could not authenticate user!'
        })
      })
  }
  
  exports.logout = (req, res) => {
    // Clear JWT token from cookie
    res.cookie('jwt', '', { maxAge: 0 })
  
    res.send({
      message: 'Logged out!'
    })
  }